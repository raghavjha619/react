import { useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './contexts/theme'
import { useEffect } from 'react'
import ThemeBtn from './components/ToggleButton'
import Card from './components/Card'

function App() {
  const [thememode, setthememode] = useState("dark")
  let themeclass = document.querySelector('html').classList
  const toggledark = () => {
    setthememode("dark")
  }
  const togglelight = () => {
    setthememode("light")
  }

  useEffect(()=>{
    themeclass.remove("dark","light")
    themeclass.add(thememode)
  },[thememode])

  return (
    <>
      <ThemeContextProvider value={{thememode, toggledark, togglelight}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeContextProvider>
    </>
  )
}

export default App
