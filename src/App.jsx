import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center">
      <div className="flex justify-center space-x-8 mb-8">
        <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform duration-300">
          <img src={viteLogo} className="h-24 p-6 bg-white rounded-full shadow-lg" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform duration-300">
          <img src={reactLogo} className="h-24 p-6 bg-white rounded-full shadow-lg animate-spin" alt="React logo" />
        </a>
      </div>
      
      <h1 className="text-6xl font-bold text-white mb-8 text-center drop-shadow-lg">
        Vite + React + Tailwind Hello
      </h1>
      
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/30">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-white text-purple-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg mb-4"
        >
          count is {count}
        </button>
        <p className="text-white text-center">
          Edit <code className="bg-black/20 px-3 py-1 rounded-lg text-yellow-300 font-mono">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="text-white/80 mt-8 text-center text-lg">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App