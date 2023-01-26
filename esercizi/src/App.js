import { Route, Routes } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { Welcome } from "./Welcome";

export function App() {

    return (
        <Routes>
            <Route path='/' element = {<Welcome nome='Matteo' />} />
            <Route path='/counter' element={<ClickCounter />} />
        </Routes>
    );
;}