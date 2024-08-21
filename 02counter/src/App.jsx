import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  // let counter = 15;
  let [counter, setCounter] = useState(15)
  let addCounter = () => {
    setCounter(counter+1)
  }
  let subCounter = () => {
    if(counter){ 
    setCounter(counter-1)}
  }
  return (
    <>
      <h1>Counters</h1>
      <br/>
      <p>if you click on the buttons bellow counter will update</p>
      <br/>
      <button 
      onClick={addCounter}>
        click to increase counter by one from {counter}
      </button>
      <button 
      onClick={subCounter}>
        click to decrease counter by one from {counter}
      </button>
    </>
  )
}
export default App