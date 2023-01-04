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
                {(this.props.age > 18 && this.props.age < 65 )  ? <Age age={this.props.age} /> : false}
            </div>
        ) 
    }
}