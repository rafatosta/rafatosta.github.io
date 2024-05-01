import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-6'>
      <div className='flex flex-row gap-6'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">
        Vite + React + Tailwind CSS
      </h1>
    </div>
  )
}

export default App
