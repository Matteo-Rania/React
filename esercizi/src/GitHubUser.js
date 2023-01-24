import { useGitHubUser } from "./useGitHubUser"

export function GitHubUser({username}){

    const {data, error} = useGitHubUser(username)

    return (
        <div>
            {data && <h2>{data.name}</h2>}
            {error && <h2>there was an error</h2>}
        </div>
    )
}