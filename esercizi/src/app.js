import React from "react";
import {Counter} from "./ClickCounter";



export class App extends React.Component{
    render(){
        return <Counter initialValue= {0} increment ={2}/>
    }
}