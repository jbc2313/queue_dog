import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.css'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import StackView from './pages/StackView'
import QueueView from './pages/QueueView'
import Nav from './components/Nav'

function App() {
  const location = useLocation();
  const navigate = useNavigate();

// this needs to be completely reworked, i dont like it
return (
    <div className="App">
      <Nav /> 
      <Routes>
        <Route path='stackView' element={<StackView />} />
        <Route path='queueView' element={<QueueView /> } />
      </Routes>

     </div>
  )
}

export default App
