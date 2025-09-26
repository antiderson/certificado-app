import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Certificado from './pages/certificado/Certificado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Certificado />
    </>
  )
}

export default App
