
import { useGithubUser } from "./useGithubUser";

export function GitHubUser({username}){

    const {data, error, loading, onRefresh} = useGithubUser(username)

    
    

    
    return (
        <div>
            <button onClick={onRefresh}>Carica utente</button>
            {loading && <h2>Loading...</h2>}
            {data && <h2>{data.name}</h2>}
            {error && <h2>there was an error</h2>}
        </div>
    )
}