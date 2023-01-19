import React from "react";
import { Sum } from "./Sum";


export class App extends React.Component{
    render(){
        return (
            <div>
                <Sum numbers={[2,6,9,4]}/>
            </div> 
        )
    }
}