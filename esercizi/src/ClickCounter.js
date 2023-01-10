import React from 'react';

export class Counter extends React.Component{

    state = {
        count : this.props.initialValue,
    }

    handleCounterIncrement = () => {
        this.setState(state => {
            return {
                count: state.count + this.props.increment
            }
        })
    }

    
    render () {
        return(
            <div>
                <h3>Count : {this.state.count}</h3>
                <button onClick={this.handleCounterIncrement}>Increment</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    initialValue : 0,
    increment : 1,
}