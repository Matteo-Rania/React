import { useState } from "react";

export function useCounter(initialValue = 0){

    const [counter, setCounter] = useState(initialValue)

    function handleIncrement(){
        setCounter( (counter) => counter + 1) 
    }

    function handleDecrement(){
        setCounter( (counter) => counter - 1) 
    }

    function handleReset(){
        setCounter(initialValue) 
    }

    return {
        increment : handleIncrement,
        decrement : handleDecrement,
        reset : handleReset,
        counter : counter
    }

}