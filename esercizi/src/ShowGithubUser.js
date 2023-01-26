import { useParams } from 'react-router-dom';
import { GitHubUser } from './GitHubUser';

export function ShowGithubUser() {
    const { username } = useParams();

    return (
        <GitHubUser  username= {username}/>
    )
}
