import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <>
            <div className='bg-gray-200 text-3xl rounded-3xl text-orange-700 p-4 m-2'>
                User: {userid}
            </div>
        </>
    )
}

export default User
