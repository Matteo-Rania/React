import { Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";

export function App() {

    return (
        <Routes>
            <Route path='/' element = {<Welcome nome='Matteo' />} />
        </Routes>
    );
;}