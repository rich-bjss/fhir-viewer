import Image from 'next/image'
import ChartBar from './components/ChartBar.jsx'

export default function Home() {

  const data = {"nhsNumber":"9449305897","name":"MR PERCE MORTON WARISO","dob":"1987-10-10","observations":{"Respiration rate":[{"timestamp":"2023-02-18T21:54:00Z","value":18,"code":"{Breaths}/min"},{"timestamp":"2023-02-19T22:09:00Z","value":17,"code":"{Breaths}/min"},{"timestamp":"2023-02-20T22:04:00Z","value":17,"code":"{Breaths}/min"},{"timestamp":"2023-02-21T22:03:00Z","value":17,"code":"{Breaths}/min"},{"timestamp":"2023-02-22T22:06:00Z","value":17,"code":"{Breaths}/min"},{"timestamp":"2023-02-23T21:22:00Z","value":17,"code":"{Breaths}/min"},{"timestamp":"2023-02-24T21:32:00Z","value":17,"code":"{Breaths}/min"},{"timestamp":"2023-02-25T15:42:00Z","value":15,"code":"{Breaths}/min"},{"timestamp":"2023-02-25T21:27:00Z","value":18,"code":"{Breaths}/min"},{"timestamp":"2023-02-26T21:26:00Z","value":17,"code":"{Breaths}/min"},{"timestamp":"2023-02-27T21:56:00Z","value":17,"code":"{Breaths}/min"},{"timestamp":"2023-02-28T22:24:00Z","value":18,"code":"{Breaths}/min"},{"timestamp":"2023-03-01T22:19:00Z","value":17,"code":"{Breaths}/min"},{"timestamp":"2023-03-02T21:53:00Z","value":17,"code":"{Breaths}/min"},{"timestamp":"2023-03-03T22:03:00Z","value":17,"code":"{Breaths}/min"},{"timestamp":"2023-03-04T22:13:00Z","value":18,"code":"{Breaths}/min"},{"timestamp":"2023-03-05T21:29:00Z","value":17,"code":"{Breaths}/min"},{"timestamp":"2023-03-06T21:41:00Z","value":17,"code":"{Breaths}/min"},{"timestamp":"2023-03-07T21:58:00Z","value":17,"code":"{Breaths}/min"},{"timestamp":"2023-03-08T22:04:00Z","value":17,"code":"{Breaths}/min"}],"Oxygen saturation":[],"Systolic blood pressure":[{"timestamp":"2023-08-19T06:09:28Z","value":120,"code":"mm[Hg]"},{"timestamp":"2023-08-19T09:23:49Z","value":120,"code":"mm[Hg]"},{"timestamp":"2023-08-21T05:52:37Z","value":120,"code":"mm[Hg]"},{"timestamp":"2023-09-05T15:56:21Z","value":120,"code":"mm[Hg]"},{"timestamp":"2023-09-05T16:00:14Z","value":120,"code":"mm[Hg]"}],"Pulse rate":[{"timestamp":"2022-12-09T08:52:37Z","value":70,"code":"{beats}/min"},{"timestamp":"2022-12-11T09:21:41Z","value":75,"code":"{beats}/min"},{"timestamp":"2022-12-11T09:58:00Z","value":96,"code":"{beats}/min"},{"timestamp":"2023-02-27T09:17:31Z","value":87,"code":"{beats}/min"},{"timestamp":"2023-02-28T07:31:10Z","value":50,"code":"{beats}/min"},{"timestamp":"2023-03-01T08:50:40Z","value":120,"code":"{beats}/min"},{"timestamp":"2023-03-02T08:34:41Z","value":48,"code":"{beats}/min"},{"timestamp":"2023-03-02T09:12:24Z","value":81,"code":"{beats}/min"},{"timestamp":"2023-03-03T18:46:49Z","value":111,"code":"{beats}/min"},{"timestamp":"2023-03-06T08:09:38Z","value":53,"code":"{beats}/min"},{"timestamp":"2023-03-06T09:04:27Z","value":78,"code":"{beats}/min"},{"timestamp":"2023-03-07T08:20:54Z","value":51,"code":"{beats}/min"},{"timestamp":"2023-03-07T09:20:15Z","value":79,"code":"{beats}/min"},{"timestamp":"2023-03-07T18:48:04Z","value":65,"code":"{beats}/min"},{"timestamp":"2023-03-08T07:47:33Z","value":59,"code":"{beats}/min"},{"timestamp":"2023-03-08T18:29:37Z","value":100,"code":"{beats}/min"},{"timestamp":"2023-03-09T07:57:38Z","value":60,"code":"{beats}/min"},{"timestamp":"2023-03-09T09:10:22Z","value":80,"code":"{beats}/min"},{"timestamp":"2023-03-10T07:47:42Z","value":56,"code":"{beats}/min"},{"timestamp":"2023-03-11T10:26:04Z","value":81,"code":"{beats}/min"}],"Temperature":[{"timestamp":"2023-02-01T08:12:14Z","value":35.8,"code":"Cel"},{"timestamp":"2023-02-02T08:34:08Z","value":36.472,"code":"Cel"},{"timestamp":"2023-02-05T12:28:42Z","value":36.47,"code":"Cel"},{"timestamp":"2023-02-06T09:17:24Z","value":35.822,"code":"Cel"},{"timestamp":"2023-02-07T09:26:43Z","value":35.855,"code":"Cel"},{"timestamp":"2023-02-08T20:04:19Z","value":36.805,"code":"Cel"},{"timestamp":"2023-02-12T09:42:00Z","value":36.127,"code":"Cel"},{"timestamp":"2023-02-14T07:55:22Z","value":36.264,"code":"Cel"},{"timestamp":"2023-02-15T08:27:32Z","value":35.648,"code":"Cel"},{"timestamp":"2023-02-16T07:22:42Z","value":36.537,"code":"Cel"},{"timestamp":"2023-02-17T08:09:53Z","value":36.527,"code":"Cel"},{"timestamp":"2023-02-18T07:53:45Z","value":36.189,"code":"Cel"},{"timestamp":"2023-02-26T08:15:22Z","value":36.933,"code":"Cel"},{"timestamp":"2023-03-05T09:48:34Z","value":36.972,"code":"Cel"},{"timestamp":"2023-03-05T09:52:48Z","value":36.959,"code":"Cel"},{"timestamp":"2023-03-06T08:11:22Z","value":36.772,"code":"Cel"},{"timestamp":"2023-03-07T08:18:10Z","value":36.472,"code":"Cel"},{"timestamp":"2023-03-08T06:45:52Z","value":36.409,"code":"Cel"},{"timestamp":"2023-03-09T06:03:30Z","value":36.624,"code":"Cel"},{"timestamp":"2023-03-11T08:41:05Z","value":36.394,"code":"Cel"}]},"newsScores":[{"timestamp":"2022-12-09T08:52:37Z","value":0},{"timestamp":"2022-12-11T09:21:41Z","value":0},{"timestamp":"2022-12-11T09:58:00Z","value":1},{"timestamp":"2023-02-01T08:12:14Z","value":2},{"timestamp":"2023-02-02T08:34:08Z","value":1},{"timestamp":"2023-02-05T12:28:42Z","value":1},{"timestamp":"2023-02-06T09:17:24Z","value":2},{"timestamp":"2023-02-07T09:26:43Z","value":2},{"timestamp":"2023-02-08T20:04:19Z","value":1},{"timestamp":"2023-02-12T09:42:00Z","value":1},{"timestamp":"2023-02-14T07:55:22Z","value":1},{"timestamp":"2023-02-15T08:27:32Z","value":2},{"timestamp":"2023-02-16T07:22:42Z","value":1},{"timestamp":"2023-02-17T08:09:53Z","value":1},{"timestamp":"2023-02-18T07:53:45Z","value":1},{"timestamp":"2023-02-18T21:54:00Z","value":1},{"timestamp":"2023-02-19T22:09:00Z","value":1},{"timestamp":"2023-02-20T22:04:00Z","value":1},{"timestamp":"2023-02-21T22:03:00Z","value":1},{"timestamp":"2023-02-22T22:06:00Z","value":1},{"timestamp":"2023-02-23T21:22:00Z","value":1},{"timestamp":"2023-02-24T21:32:00Z","value":1},{"timestamp":"2023-02-25T15:42:00Z","value":1},{"timestamp":"2023-02-25T21:27:00Z","value":1},{"timestamp":"2023-02-26T08:15:22Z","value":1},{"timestamp":"2023-02-26T21:26:00Z","value":1},{"timestamp":"2023-02-27T09:17:31Z","value":0},{"timestamp":"2023-02-27T21:56:00Z","value":0},{"timestamp":"2023-02-28T07:31:10Z","value":1},{"timestamp":"2023-02-28T22:24:00Z","value":1},{"timestamp":"2023-03-01T08:50:40Z","value":2},{"timestamp":"2023-03-01T22:19:00Z","value":2},{"timestamp":"2023-03-02T08:34:41Z","value":1},{"timestamp":"2023-03-02T09:12:24Z","value":0},{"timestamp":"2023-03-02T21:53:00Z","value":0},{"timestamp":"2023-03-03T18:46:49Z","value":2},{"timestamp":"2023-03-03T22:03:00Z","value":2},{"timestamp":"2023-03-04T22:13:00Z","value":2},{"timestamp":"2023-03-05T09:48:34Z","value":2},{"timestamp":"2023-03-05T09:52:48Z","value":2},{"timestamp":"2023-03-05T21:29:00Z","value":2},{"timestamp":"2023-03-06T08:09:38Z","value":0},{"timestamp":"2023-03-06T08:11:22Z","value":0},{"timestamp":"2023-03-06T09:04:27Z","value":0},{"timestamp":"2023-03-06T21:41:00Z","value":0},{"timestamp":"2023-03-07T08:18:10Z","value":0},{"timestamp":"2023-03-07T08:20:54Z","value":0},{"timestamp":"2023-03-07T09:20:15Z","value":0},{"timestamp":"2023-03-07T18:48:04Z","value":0},{"timestamp":"2023-03-07T21:58:00Z","value":0},{"timestamp":"2023-03-08T06:45:52Z","value":0},{"timestamp":"2023-03-08T07:47:33Z","value":0},{"timestamp":"2023-03-08T18:29:37Z","value":1},{"timestamp":"2023-03-08T22:04:00Z","value":1},{"timestamp":"2023-03-09T06:03:30Z","value":1},{"timestamp":"2023-03-09T07:57:38Z","value":0},{"timestamp":"2023-03-09T09:10:22Z","value":0},{"timestamp":"2023-03-10T07:47:42Z","value":0},{"timestamp":"2023-03-11T08:41:05Z","value":0},{"timestamp":"2023-03-11T10:26:04Z","value":0},{"timestamp":"2023-08-19T06:09:28Z","value":0},{"timestamp":"2023-08-19T09:23:49Z","value":0},{"timestamp":"2023-08-21T05:52:37Z","value":0},{"timestamp":"2023-09-05T15:56:21Z","value":0},{"timestamp":"2023-09-05T16:00:14Z","value":0}]}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">

    <table className="w-full">
      <tbody> 
        <tr>
          <td className="w-1/3 p-5">
            <div id="patientDetails" className="w-full pt-0 mb-5 h-full bg-gray-100 rounded text-black shadow-xl" > 
              <div className="w-full">
                <h2 className="p-5 rounded bg-blue-300 font-bold"> Patient Details</h2>
              </div>
              
              <div className="p-5">
                <h1 className="text-xl font-bold">{data.name}</h1>
              
                <div className="w-full">
                  <p className="">NHS NUMBER: {data.nhsNumber}</p>
                  <p className="">DOB: {data.dob}</p>
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
                  <ChartBar title="News Scores" data={data.newsScores} height="100">

                  </ChartBar>
                  <br></br>
                  <button className="right-0 bg-blue-500 hover:bg-blue-500 text-white py-2 px-4 rounded">
                    {"-> Details"}
                  </button>
                </div>
                
                <div className="bg-gray-200 p-5 m-2 rounded text-black">
                  <ChartBar title="Respiration rate" data={data.observations['Respiration rate']} height="50"/></div>
                
                <div className="bg-gray-200 p-5 m-2 rounded text-black">
                  <ChartBar title="Systolic blood pressure" data={data.observations['Systolic blood pressure']} height="50"/></div>
                
                <div className="bg-gray-200 p-5 m-2 rounded text-black">
                  <ChartBar title="Pulse rate" data={data.observations['Pulse rate']} height="50"/></div>
                
                <div className="bg-gray-200 p-5 m-2 rounded text-black">
                  <ChartBar title="Oxygen saturation" data={data.observations['Oxygen saturation']} height="50"/></div>
                
                <div className="bg-gray-200 p-5 m-2 rounded text-black">
                  <ChartBar title="Temperature" data={data.observations['Temperature']} height="50"/></div>
              </div>

            </div>  
          </div>
          </td>
        </tr>
      </tbody>
    </table>

      






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
