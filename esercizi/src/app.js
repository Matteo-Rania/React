import React from "react";
import { Login } from "./Login";
import { Welcome } from "./Welcome";


export class App extends React.Component{
    render(){
        return (
            <div className="flex-column">
                <Welcome name='matteo' />
                <Login />
            </div>
        )
    }
}