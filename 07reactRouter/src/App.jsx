import { useState } from 'react'
import './App.css'
import Home from './components/home/home'
import Footer from './components/footer/footer'
import Header from './components/Header/header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Home />
    <Footer />
    </>
  )
}

export default App
