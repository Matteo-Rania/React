import React from "react";

export class Welcome extends React.Component{
    static defaultProps = {
        name: "Matteo",
      };
    render(){
        return <p>Welcome, {this.props.name}</p>
    }
}