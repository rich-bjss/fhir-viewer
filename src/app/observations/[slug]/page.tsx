
import Image from 'next/image'
import ChartBar from '../../components/ChartBar.jsx'
import Modal from '../../components/Modal'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

//9876543210
async function getData(id: any) {
  console.log(`https://fhir-observations.kindground-97a21155.uksouth.azurecontainerapps.io/patientObservations/${id}`)
  const res = await fetch(`https://fhir-observations.kindground-97a21155.uksouth.azurecontainerapps.io/patientObservations/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    console.log(res);
    throw new Error('Failed to fetch data')
  }

 
  return res.json()
}




export default async function Page({ params }: { params: { slug: string } }) {

  // const router = useRouter()
  // console.log(router)

//   const [showModal, setShowModal] = useState(false);  
//   const [dataType, setDataType] = useState("");

  function handleOpenModal(type: string){
    
    // setShowModal(true);
    // setDataType(type);
   // console.log(showModal);
  }

  function handleCloseModal(){
   // setShowModal(false);
    console.log("Closing modal");
  }
  

  const data = await getData(params.slug)

  //console.log(JSON.stringify(data))

//   const data = {
//     "nhsNumber": "9876543210",
//     "name": "MISS RACHEL KANFELD",
//     "dob": "1998-03-16",
//     "observations": {
//       "Respiration rate": [
//         {
//           "timestamp": "2023-02-01T12:45:00Z",
//           "value": 56,
//           "code": "{Breaths}/min"
//         }
//       ],
//       "Oxygen saturation": [
//         {
//           "timestamp": "2023-02-01T12:45:00Z",
//           "value": 90,
//           "code": "%"
//         }
//       ],
//       "Systolic blood pressure": [],
//       "Pulse rate": [
//         {
//           "timestamp": "2022-02-15T14:17:59+01:00",
//           "value": 48,
//           "code": "{beats}/min"
//         },
//         {
//           "timestamp": "2023-02-01T12:45:00Z",
//           "value": 87,
//           "code": "{beats}/min"
//         },
//         {
//           "timestamp": "2022-02-15T14:17:59+01:00",
//           "value": 48,
//           "code": "{beats}/min"
//         },
//         {
//           "timestamp": "2022-02-16T14:17:59+01:00",
//           "value": 49,
//           "code": "{beats}/min"
//         }
//       ],
//       "Temperature": [
//         {
//           "timestamp": "2023-02-01T12:45:00Z",
//           "value": 37.1,
//           "code": "Cel"
//         }
//       ]
//     },
//     "newsScores": {
//       "2022-02-15T14:17:59+01:00": 1,
//       "2022-02-16T14:17:59+01:00": 1,
//       "2023-02-01T12:45:00Z": 6
//     }
//   }

  


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">

    <header>
      <form>
        <label> Enter a NHS Number: </label>
        <input type="text"></input>
      </form>
    </header>










    <table className="w-full">
      <tbody> 
        <tr>
          <td className="w-1/3 p-5 pt-0 align-top">
            <div id="patientDetails" className="w-full pt-0 mb-5 h-full bg-gray-100 rounded text-black shadow-xl" > 
              <div className="w-full">
                <h2 className="p-5 rounded bg-blue-300 font-bold"> Patient Details</h2>
              </div>
              
              <div className="p-5">
                <h1 className="text-xl font-bold">{data.name}</h1>
              
                <div className="w-full">
                  <br />
                  <p className="text-sm">NHS NUMBER: {data.nhsNumber}</p>
                  <p className="text-sm">DOB: {data.dob}</p>
                </div>
              </div>
            </div>
            <div  className="w-full pt-0 h-full bg-gray-100 rounded font-bold text-black shadow-xl" > 
              <div className="w-full">
                <h2 className="p-5 rounded bg-blue-300"> Other</h2>
              </div>
              
              <div className="w-full p-5 font-normal">
                <p className=""></p>
                <p className="">???:</p>
                <p className="">???:</p>
              </div>
            </div>
          </td>

          <td className="w-1/3">
          <div id="Dashboard" className="w-full inline-block">        
            <div id="vitalSigns" className="w-full pt-0 bg-gray-100 rounded text-black shadow-xl font-bold">
              <div className="w-full">
                <h2 className="p-5 rounded bg-blue-300"> Vital Signs</h2>
              </div>
              <div className="p-2">
                <div className="bg-gray-200 p-5 m-2 rounded text-black">
                  <ChartBar title="News Scores" data={data.newsScores} height="100"></ChartBar>
                  <br></br>
                  <button className="right-0 bg-blue-500 hover:bg-blue-500 text-white py-2 px-4 rounded">
                    {"-> Details"}
                  </button>
                </div>
                
                <div className="bg-gray-200 p-5 m-2 rounded text-black">
                  <ChartBar title="Respiration rate" data={data.observations['Respiration rate']} height="50"/>
                  <br></br>
                  <button className="right-0 bg-blue-500 hover:bg-blue-500 text-white py-2 px-4 rounded">
                    {"-> Details"}
                  </button>
                  </div>
                <div className="bg-gray-200 p-5 m-2 rounded text-black">
                  <ChartBar title="Oxygen saturation" data={data.observations['Oxygen saturation']} height="50"/>
                  <br></br>
                  <button className="right-0 bg-blue-500 hover:bg-blue-500 text-white py-2 px-4 rounded">
                    {"-> Details"}
                  </button>
                  </div>
                <div className="bg-gray-200 p-5 m-2 rounded text-black">
                  <ChartBar title="Systolic blood pressure" data={data.observations['Systolic blood pressure']} height="50"/>
                  <br></br>
                  <button className="right-0 bg-blue-500 hover:bg-blue-500 text-white py-2 px-4 rounded">
                    {"-> Details"}
                  </button>
                  </div>
                <div className="bg-gray-200 p-5 m-2 rounded text-black">
                  <ChartBar title="Pulse rate" data={data.observations['Pulse rate']} height="50"/>
                  <br></br>
                  <button className="right-0 bg-blue-500 hover:bg-blue-500 text-white py-2 px-4 rounded">
                    {"-> Details"}
                  </button>
                  </div>
                <div className="bg-gray-200 p-5 m-2 rounded text-black">
                  <ChartBar title="Temperature" data={data.observations['Temperature']} height="50"/>
                  <br></br>
                  <button className="right-0 bg-blue-500 hover:bg-blue-500 text-white py-2 px-4 rounded">
                    {"-> Details"}
                  </button>
                  </div>
              </div>

            </div>  
          </div>
          </td>
        </tr>
      </tbody>
    </table>

    {/* <Modal show={showModal} handleClose={handleCloseModal} dataType={dataType} data={data}/> */}

      






      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  )
}
