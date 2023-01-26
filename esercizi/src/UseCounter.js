import { useState, useCallback } from "react";

export function useCounter(initialValue = 0){

    const [counter, setCounter] = useState(initialValue)

    const handleIncrement = useCallback( function handleIncrement(){
        setCounter( (counter) => counter + 1) 
    },[] )

    const handleDecrement = useCallback(function handleDecrement(){
        setCounter( (counter) => counter - 1) 
    }, [] )

    const handleReset = useCallback(function handleReset(){
        setCounter(initialValue) 
    }, [initialValue] )

    return {
        increment : handleIncrement,
        decrement : handleDecrement,
        reset : handleReset,
        counter : counter
    }

}