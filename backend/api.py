from fastapi import FastAPI
from fhirclient import client
import fhirclient.models.patient as p
import fhirclient.models.observation as o

app = FastAPI()

# https://digital.nhs.uk/developer/guides-and-documentation/legacy-fhir-profiles/vital-signs-profiles
SNOMED_CODES = {'Respiration rate': '86290005',
                'Oxygen saturation': '103228002',
                'Systolic blood pressure': '72313002',
                'Pulse rate': '364075005',
                'Temperature': '276885007'}


def _newsRespirationRate(respirationRate):
    if respirationRate >= 25: return 3
    if respirationRate >= 21: return 2
    if respirationRate >= 12: return 0
    if respirationRate >= 9: return 1
    return 3

def _newsOxygenSaturation(oxygenSaturation):
    if oxygenSaturation >= 96: return 0
    if oxygenSaturation >= 94: return 1
    if oxygenSaturation >= 92: return 2
    return 3

def _newsBloodPressure(systolicBP):
    if systolicBP >= 220: return 3
    if systolicBP >= 111: return 0
    if systolicBP >= 101: return 1
    if systolicBP >= 91: return 2
    return 3

def _newsPulse(pulse):
    if pulse >= 131: return 3
    if pulse >= 111: return 2
    if pulse >= 91: return 1
    if pulse >= 51: return 0
    if pulse >= 41: return 1
    return 3

def _newsTemperature(temperature):
    if temperature >= 39.1: return 2
    if temperature >= 38.1: return 1
    if temperature >= 36.1: return 0
    if temperature >= 35.1: return 1
    return 3

NEWS_CALCS = {'Respiration rate': _newsRespirationRate,
                'Oxygen saturation': _newsOxygenSaturation,
                'Systolic blood pressure': _newsBloodPressure,
                'Pulse rate': _newsPulse,
                'Temperature': _newsTemperature}

def _fetchObservations(smart, patientId):
    observationsDict = {}
    obsByTimestampDict = {}

    for observationName, snomedCode in SNOMED_CODES.items():
        observationSearch = o.Observation.where({'patient': patientId, 'code': snomedCode})
        observations = observationSearch.perform_resources(smart.server)

        obs = []
        obsByTimestamp = {}
        for ob in [o for o in observations if o.valueQuantity]:
            effectiveDateTime = ob.effectiveDateTime or ob.effectivePeriod.start
            observationObject = {'timestamp': effectiveDateTime.isostring, 'value': ob.valueQuantity.value, 'code': ob.valueQuantity.code}
            obs.append(observationObject)
            obsByTimestamp[effectiveDateTime.isostring] = observationObject
        observationsDict[observationName] = obs
        obsByTimestampDict[observationName] = obsByTimestamp

    return observationsDict, obsByTimestampDict

def _calculateNewsScore(timedObservations):
    score = 0
    for observationName, observation in timedObservations.items():
        if observation:
            calcFunction = NEWS_CALCS[observationName]
            score += calcFunction(observation)
    return score

def _generateNewsScores(obsByTimestampDict):
    allTimestamps = []
    for obsName, obsByTimestamp in obsByTimestampDict.items():
        allTimestamps += obsByTimestamp.keys()

    allTimestamps.sort()
    
    # initialise scores to None
    tracker = {}
    for observationName in SNOMED_CODES:
        tracker[observationName] = None

    timedNewsScores = {}
    
    for timestamp in allTimestamps:
        for observationName in SNOMED_CODES:
            if timestamp in obsByTimestampDict[observationName]:
                tracker[observationName] = obsByTimestampDict[observationName][timestamp]['value']

        timedNewsScores[timestamp] = _calculateNewsScore(tracker)

    return timedNewsScores

@app.get("/patientObservations/{nhsNumber}")
def fetchPatientObservations(nhsNumber):

    settings = {
        'app_id': 'my_web_app',
        'api_base': 'https://3cdzg7kbj4.execute-api.eu-west-2.amazonaws.com/poc/clinicaldatasharing/FHIR/R4'
    }

    smart = client.FHIRClient(settings=settings)

    patientSearch = p.Patient.where({'identifier': f'https://fhir.nhs.uk/Id/nhs-number|{nhsNumber}'})

    patientsFound = patientSearch.perform_resources(smart.server)
    patient = patientsFound[0]
    patientId = patient.id

    observationsDict, obsByTimestampDict = _fetchObservations(smart, patientId)

    ret = {'nhsNumber': nhsNumber,
           'name': smart.human_name(patient.name[0]),
           'dob': patient.birthDate.date,
            'observations': observationsDict,
            'newsScores': _generateNewsScores(obsByTimestampDict)}

    return ret
