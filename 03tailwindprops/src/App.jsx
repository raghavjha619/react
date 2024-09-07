import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card errorName = "404" errorDef = "We can&#x27;t find that page"/>
    <Card errorName = "undefined"/>
    </>
  )
}

export default App
