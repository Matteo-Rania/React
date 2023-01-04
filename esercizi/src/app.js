import React from "react";
import { Welcome } from "./welcome";


export class App extends React.Component{
    render(){
        return <Welcome name='Matteo' age={22} />
    }
}