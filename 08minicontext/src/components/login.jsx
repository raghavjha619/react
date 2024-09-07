import React from 'react'
import UserContext from '../../context/UserContext'
import { useContext, useState } from 'react'
function Login() {
    const [Username, setUsername] = useState('') 
    const [Password, setPassword] = useState('')
    const { setuser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setuser({Username, Password})
    }


    return (
        <>
            <h1>Fill your login page</h1>
            <label htmlFor="Username">Username: </label>
            <input
                id="Username"
                placeholder="Username"
                type="text"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
            <label htmlFor="Password">Password: </label>
            <input
            id='Password'
                placeholder='password'
                type='password'
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login
