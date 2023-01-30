import { Link, Route, Routes } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { GitHubUser } from "./GitHubUser";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./Welcome";

export function App() {

    return (
        <div>
            <div className="flex justify-center gap-4">
                <Link className="border-2 border-black " to='/'>Welcome</Link >
                <Link className="border-2 border-black " to='/counter'>Counter</Link >
                <Link className="border-2 border-black " to='/users'>Search Github account</Link>
            </div>
            <div className=" m-6">
                <Routes>
                    <Route path='/' element={<Welcome nome='Matteo' />} />
                    <Route path='/counter' element={<ClickCounter />} />
                    <Route path="/:username" element={< ShowGithubUser />}/>
                    <Route path="/users" element={<GithubUserList />}>
                        <Route path=':username' element={<GitHubUser />} />
                    </Route>
                    <Route path='*' element={
                        <div className="text-center">
                            <p>Page No Found</p>
                            <Link className="border-2 border-black" to='/'>Back to home </Link>
                        </div>
                    } />
                </Routes>
            </div>
        </div>

    );
    ;
}