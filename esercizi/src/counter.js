import React from 'react';
import { CounterDisplay } from './counterDisplay';

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
        return <CounterDisplay count={this.state.count} />
    }
}

Counter.defaultProps = {
    timeout : 1000,
    initialValue : 0,
    increment : 1,
}