import React from "react";
import { Age } from "./age";

export class Welcome extends React.Component{
    static defaultProps = {
        name: "Giacomino",
      };
    render(){
        return(
            <div>
                <p>Welcome, {this.props.name}</p>
                <Age age={this.props.age} />
            </div>
        ) 
    }
}