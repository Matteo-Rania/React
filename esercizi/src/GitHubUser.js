
import { useGithubUser } from "./useGithubUser";

export function GitHubUser({username}){

    const {data, error, loading} = useGithubUser(username)

    
    

    
    return (
        <div>
            {loading && <h2>Loading...</h2>}
            {data && <h2>{data.name}</h2>}
            {error && <h2>there was an error</h2>}
        </div>
    )
}