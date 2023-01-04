import React from 'react';

export class Counter extends React.Component{

    state = {
        count : this.props.initialValue,
    }
    constructor(props){
        super(props);

        setInterval(() => {
            this.setState((state) => {
                return {
                    count : state.count + this.props.increment
                }
            })
        }, this.props.timeout)
    }
    
    
    render () {
        return <h1>Counter: {this.state.count}</h1>
    }
}

Counter.defaultProps = {
    timeout : 1000,
    initialValue : 0,
    increment : 1,
}