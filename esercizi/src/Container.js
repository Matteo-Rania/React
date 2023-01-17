import {Component} from "react";

export class Container extends Component{
    render(){
        return(
            <div className="bg-white border-4 border-red-900 m-3 p-2">
                {this.props.children}
            </div>
        )
    }
}