import { useEffect, useState } from "react";

export function ClickCounter({initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue);
    
    useEffect(() => {
        onCounterChange(counter)
    },[counter])

    const onCounterChange = (value) => console.log(` the current value is ${value}`)

    const handleCounterIncrement = () => {
        setCounter(c => c + 1)
    }



    return (

        <div>
            <h2>  Count : {counter}</h2>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}