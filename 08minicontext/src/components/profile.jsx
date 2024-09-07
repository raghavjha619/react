import { useContext } from "react"
import React from 'react'
import UserContext from "../../context/UserContext"

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <h3>please Login ! </h3>
    return <h3>Welcome {user.Username}</h3>
}

export default Profile
