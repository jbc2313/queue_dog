import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.css'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import StackView from './pages/StackView'
import QueueView from './pages/StackView'


function App() {
  const location = useLocation();
//  console.log(location);
  const navigate = useNavigate();
  const [count, setCount] = useState(0)
  const [showVite, setShowVite] = useState(false)

// this needs to be completely reworked, i dont like it
return (
    <div className="App">
      <Routes>
        <Route path='stackView' element={<StackView />} />
        <Route path='queueView' element={<QueueView /> } />
      </Routes>
      {location.pathname !== '/stackView' &&
      <button onClick={()=>navigate('/stackView')}>GoToSTACK</button>
      }
      <br/>
      {location.pathname === '/stackView' ? <></> :      
      <>
      <button onClick={()=>setShowVite(!showVite)}>VITE</button>
      {showVite && 
      <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </>
      }</>}
    </div>
  )
}

export default App
