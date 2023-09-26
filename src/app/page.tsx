"use client"
import { useState, useEffect } from 'react';

import Image from 'next/image'
import ChartBar from './components/ChartBar.jsx'
import Modal from './components/Modal'
import FullScreenModal from './components/FullScreenModal'
import Header from './components/Header'
import Container from './components/Container'
import ChartContainer from './components/ChartContainer'


export default function Home() {

  //STATES ----------------------------------------------------------------------------
  const [showModal, setShowModal] = useState(false);
  const [showFullScreen, setShowFullScreen] = useState(false);  
  const [dataType, setDataType] = useState("");

  //TEMP DATA --------------------------------------------------------------------------
  const data = {
    "nhsNumber": "9876543210",
    "name": "MISS RACHEL KANFELD",
    "dob": "1998-03-16",
    "observations": {
      "Respiration rate": [
        {
          "timestamp": "2023-02-01T12:45:00Z",
          "value": 56,
          "code": "{Breaths}/min"
        },
        {
          "timestamp": "2023-02-02T12:45:00Z",
          "value": 57,
          "code": "{Breaths}/min"
        },
        {
          "timestamp": "2023-02-03T12:45:00Z",
          "value": 53,
          "code": "{Breaths}/min"
        }
      ],
      "Oxygen saturation": [
        {
          "timestamp": "2023-02-01T12:45:00Z",
          "value": 90,
          "code": "%"
        },
        {
          "timestamp": "2023-02-02T12:45:00Z",
          "value": 91,
          "code": "%"
        },
        {
          "timestamp": "2023-02-03T12:45:00Z",
          "value": 92,
          "code": "%"
        },
        {
          "timestamp": "2023-02-04T12:45:00Z",
          "value": 93,
          "code": "%"
        },
        {
          "timestamp": "2023-02-05T12:45:00Z",
          "value": 90,
          "code": "%"
        },
      ],
      "Systolic blood pressure": [
        {
          "timestamp": "2022-02-15T14:17:59+01:00",
          "value": 48,
          "code": "{beats}/min"
        },
        {
          "timestamp": "2022-02-16T14:17:59+01:00",
          "value": 49,
          "code": "{beats}/min"
        },
        {
          "timestamp": "2022-02-17T14:17:59+01:00",
          "value": 50,
          "code": "{beats}/min"
        },
        {
          "timestamp": "2022-02-18T14:17:59+01:00",
          "value": 48,
          "code": "{beats}/min"
        },
        {
          "timestamp": "2022-02-19T14:17:59+01:00",
          "value": 50,
          "code": "{beats}/min"
        },
        {
          "timestamp": "2022-02-20T14:17:59+01:00",
          "value": 50,
          "code": "{beats}/min"
        },
        {
          "timestamp": "2022-02-21T14:17:59+01:00",
          "value": 50,
          "code": "{beats}/min"
        },
        {
          "timestamp": "2022-02-22T14:17:59+01:00",
          "value": 50,
          "code": "{beats}/min"
        },
        {
          "timestamp": "2022-02-23T14:17:59+01:00",
          "value": 50,
          "code": "{beats}/min"
        },
        {
          "timestamp": "2022-02-24T14:17:59+01:00",
          "value": 50,
          "code": "{beats}/min"
        },
        {
          "timestamp": "2022-02-25T14:17:59+01:00",
          "value": 50,
          "code": "{beats}/min"
        },
      ],
      "Pulse rate": [
        {
          "timestamp": "2022-02-01T14:17:59+01:00",
          "value": 48,
          "code": "{beats}/min"
        },
        {
          "timestamp": "2022-02-02T14:17:59+01:00",
          "value": 47,
          "code": "{beats}/min"
        },
        {
          "timestamp": "2022-02-15T14:17:59+01:00",
          "value": 48,
          "code": "{beats}/min"
        },
        {
          "timestamp": "2022-02-16T14:17:59+01:00",
          "value": 49,
          "code": "{beats}/min"
        }
      ],
      "Temperature": [
        {
          "timestamp": "2023-02-01T12:45:00Z",
          "value": 37.1,
          "code": "Cel"
        },
        {
          "timestamp": "2023-02-02T12:45:00Z",
          "value": 37.2,
          "code": "Cel"
        },
        {
          "timestamp": "2023-02-03T12:45:00Z",
          "value": 37.1,
          "code": "Cel"
        },
        {
          "timestamp": "2023-02-04T12:45:00Z",
          "value": 37.2,
          "code": "Cel"
        },
        {
          "timestamp": "2023-02-05T12:45:00Z",
          "value": 37.1,
          "code": "Cel"
        }
      ]
    },
    "newsScores": [
      {
        "timestamp": "2023-02-01T12:45:00Z",
        "value": 37.4,
        "code": "Cel"
      },
      {
        "timestamp": "2023-02-02T12:45:00Z",
        "value": 37.3,
        "code": "Cel"
      },
      {
        "timestamp": "2023-02-03T12:45:00Z",
        "value": 37.6,
        "code": "Cel"
      }
    ]
  }

  //EVENT HANDLERS ---------------------------------------------------------------------
  function handleOpenModal(type: string){
    setShowModal(true);
    setDataType(type);
    console.log("opening modal " + showModal);
  }

  function handleCloseModal(){
    setShowModal(false);
    console.log("Closing modal");
  }

  function handleOpenFullScreen(type: string){
    setShowFullScreen(true);
    setDataType(type);
    console.log("opening full Screen " + showFullScreen);
  }

  function handleCloseFullScreen(){
    setShowFullScreen(false);
    console.log("Closing fullScreen");
  }

  //TO BE RENDERED ---------------------------------------------------------------------
  return (
    <>
    <Header loggedIn={true} />
    <main className="flex min-h-screen flex-col items-center justify-between px-4 bg-white">  
    <table className="w-full mt-20">
      <tbody> 
        <tr>
          {/* LEFT COLUMN ------------------------------------------------------------------*/}
          <td className="w-1/4 p-5 pt-0 align-top">
            <Container title="Patient Details" 
              content={
                <>
                <h1 className="text-xl font-bold text-blue-600">{data.name}</h1>
                <br />
                <p><span className="font-bold">NHS NUMBER: </span> {data.nhsNumber}</p>
                <p><span className="font-bold">DOB: </span> {data.dob}</p>
                </>
              }
            />

            <Container title="Other"
              content={
                <>
                <p><span className="font-bold">??? </span></p>
                <p><span className="font-bold">??? </span></p>
                </>
              }
            />
          </td>
          
          {/* RIGHT COLUMN ------------------------------------------------------------------*/}
          <td className="w-3/4">
            <Container title="Vital Signs" content={<>
              <ChartContainer 
                chart={
                  <ChartBar title="News Scores" data={data.newsScores} height="100" showAllLabels={false}
                    fullScreenButton={
                      <button onClick={() => handleOpenFullScreen("newsScores")} 
                          className=" float-right hover:text-black text-blue-600 rounded">
                        {"[  ]"}
                      </button>
                    } 
                  />
                }
                buttons={<>
                  <button onClick={() => handleOpenModal("newsScores")} className=" px-2 border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 rounded">
                    {"-> Details"}
                  </button>
                </>}
              />

              {/* TWO NEW COLUMNS WITHIN PARENT RIGHT COLUMN ------------------------------------------- */}
              <table className="w-full">
               <tbody> 
                  <tr>
                    {/* LEFT COLUMN WITHIN PARENT COLUMN ------------------------------------------------------------------*/}
                    <td className="w-1/2 pr-1">
                      <ChartContainer 
                        chart={
                          <ChartBar title="Respiration Rate" data={data.observations['Respiration rate']} height="100" showAllLabels={false}
                            fullScreenButton={
                              <button onClick={() => handleOpenFullScreen("Respiration rate")} 
                                  className=" float-right hover:text-black text-blue-600 rounded">
                                {"[  ]"}
                              </button>
                            } 
                          />
                        }
                        buttons={<>
                          <button onClick={() => handleOpenModal("Respiration rate")} className=" px-2 border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 rounded">
                            {"-> Details"}
                          </button>
                        </>}
                      />

                      <ChartContainer 
                        chart={
                          <ChartBar title="Systolic Blood Pressure" data={data.observations['Systolic blood pressure']} height="100" showAllLabels={false}
                            fullScreenButton={
                              <button onClick={() => handleOpenFullScreen("Systolic blood pressure")} 
                                  className=" float-right hover:text-black text-blue-600 rounded">
                                {"[  ]"}
                              </button>
                            } 
                          />
                        }
                        buttons={<>
                          <button onClick={() => handleOpenModal("Systolic blood pressure")} className=" px-2 border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 rounded">
                            {"-> Details"}
                          </button>
                        </>}
                      />
                    </td>

                    {/* RIGHT COLUMN WITHIN PARENT COLUMN ------------------------------------------------------------------*/}
                    <td className="w-1/2 pl-1">
                      <ChartContainer 
                          chart={
                            <ChartBar title="Oxygen Saturation" data={data.observations['Oxygen saturation']} height="100" showAllLabels={false}
                              fullScreenButton={
                                <button onClick={() => handleOpenFullScreen("Oxygen saturation")} 
                                    className=" float-right hover:text-black text-blue-600 rounded">
                                  {"[  ]"}
                                </button>
                              } 
                            />
                          }
                          buttons={<>
                            <button onClick={() => handleOpenModal("Oxygen saturation")} className=" px-2 border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 rounded">
                              {"-> Details"}
                            </button>
                          </>}
                        />

                      <ChartContainer 
                        chart={
                          <ChartBar title="Pulse Rate" data={data.observations['Pulse rate']} height="100" showAllLabels={false}
                            fullScreenButton={
                              <button onClick={() => handleOpenFullScreen("Pulse rate")} 
                                  className=" float-right hover:text-black text-blue-600 rounded">
                                {"[  ]"}
                              </button>
                            } 
                          />
                        }
                        buttons={<>
                          <button onClick={() => handleOpenModal("Pulse rate")} className=" px-2 border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 rounded">
                            {"-> Details"}
                          </button>
                        </>}
                      />
                    </td>
                  </tr>
                </tbody>      
              </table>

              {/* BACK TO PARENT RIGHT COLUMN  ------------------------------------------------------------------------ */}
              <ChartContainer 
                chart={
                  <ChartBar title="Temperature" data={data.observations['Temperature']} height="100" showAllLabels={false}
                    fullScreenButton={
                      <button onClick={() => handleOpenFullScreen("Temperature")} 
                          className=" float-right hover:text-black text-blue-600 rounded">
                        {"[  ]"}
                      </button>
                    } 
                  />
                }
                buttons={<>
                  <button onClick={() => handleOpenModal("Temperature")} className=" px-2 border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 rounded">
                    {"-> Details"}
                  </button>
                </>}
              />

              </>
            }/>
          </td>
        </tr>
      </tbody>
    </table>

    {/* MODALS ------------------------------------------------------------------------------------------- */}
    <Modal show={showModal} handleClose={handleCloseModal} dataType={dataType} data={data}/>
    <FullScreenModal show={showFullScreen} handleClose={handleCloseFullScreen} dataType={dataType} data={data} showAllLabels={true}/>
    
    </main>
    </>
  )
}
