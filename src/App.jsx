import { useState } from 'react'
import './App.css'
import { CgGym } from "react-icons/cg";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <CgGym size="10em" color='blue'/>
      </div>
      <h1>A Personal Training App</h1>
      <div className="card">
        <button className="homepage-button" onClick={() => setCount((count) => count + 1)} style={{ background: "red", color: "white" }}>
          Reps are {count}
        </button>
      </div>
    </>
  )
}

export default App
