import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'


function App() {
    // console.log(import.meta.env.VITE_APPWRITE_URL);//THIS PROCESS OF ACCESSING THE ENV VARIABLE IS DIFF IN CREATEREACT OR NEXT OR ANGULAR OR WHATEVER YOU USE

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    useEffect(() => {
        authService.getUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login(userData))
                } else {
                    dispatch(logout());
                }
            })
            .finally(() => setLoading(false));
    }, [])

    if (loading) {
        return (
            <>
                <div className="flex h-screen w-full justify-center items-center bg-gray-300 ">
                    <h1 className="text-center font-bold text-2xl">...loading</h1>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="flex flex-wrap h-screen w-full justify-center items-center bg-gray-300 ">
                    <div className="text-center font-bold text-2xl">
                        <Header />
                        <main>
                            TODO: <Outlet/>
                        </main>
                        <Footer />
                    </div>
                </div>
            </>
        )
    }
}

export default App
