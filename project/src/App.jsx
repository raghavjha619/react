import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
    console.log(import.meta.env.VITE_APPWRITE_URL);//THIS PROCESS OF ACCESSING THE ENV VARIABLE IS DIFF IN CREATEREACT OR NEXT OR ANGULAR OR WHATEVER YOU USE
    
    return (
        <>
            <div className="flex w-full justify-center bg-gray-500">Hello</div>
        </>
    )
}

export default App
