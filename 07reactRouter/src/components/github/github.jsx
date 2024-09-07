import React, { useEffect, useState , use} from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const Data = useLoaderData()
    // const [Data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/raghavjha619')
    //     .then((res) => res.json())
    //     .then((data)=> setData(data))
    // },[])
    return (
        <>
            <div className='bg-gray-400 flex flex-col justify-center items-center text-orange-700 p-4 rounded-full m-[1%]'> 
            <h1 className='m-[1%] font-medium text-xl'>
                Github profile pic of {Data.login}
            </h1>
            <img src={Data.avatar_url} alt="github profile pic" width={300}/>
            </div>
        </>
    )
}

export default Github
export const GitHubInfoLoader = async () => {
    const response = fetch('https://api.github.com/users/raghavjha619').then((res)=>res.json())
    return response
}
