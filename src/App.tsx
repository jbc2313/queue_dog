import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/App.css'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import StackView from './pages/StackView'
import QueueView from './pages/QueueView'
import About from './pages/About'
import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  const location = useLocation();
  const navigate = useNavigate();

// 
// this needs to be completely reworked, i dont like it
// 
// still need to look into this..
//

return (
    <div className="App">
      <Nav /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='stackView' element={<StackView />} />
        <Route path='queueView' element={<QueueView /> } />
        <Route path='About' element={<About />} />
      </Routes>

     </div>
  )
}

export default App
