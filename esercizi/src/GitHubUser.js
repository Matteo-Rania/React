import { useEffect, useState } from "react";

export function GitHubUser({username}){

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    async function fetchUser(username){
        setError(null)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            console.log(json)

            setData(json)
        } catch (error) {
            setError(error)
            setData(null)
        }

    }

    useEffect(() => {
        fetchUser(username)
    },[username])
    
    return (
        <div>
            {data && <h2>{data.name}</h2>}
            {error && <h2>there was an error</h2>}
        </div>
    )
}