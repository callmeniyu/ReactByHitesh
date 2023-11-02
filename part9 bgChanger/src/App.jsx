import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200 flex justify-center" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl bottom-12" >
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black ' style={{ backgroundColor: 'red' }}
          onClick={() => setColor("red")}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{ backgroundColor: 'green' }}
          onClick={() => setColor("green")}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{ backgroundColor: 'yellow' }}
          onClick={() => setColor("yellow")}>yellow</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{ backgroundColor: 'Blue' }}
          onClick={() => setColor("Blue")}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
