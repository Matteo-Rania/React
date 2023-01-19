import { useEffect, useState } from "react";

export function ClickCounter({initialValue = 0, increment = 1, interval = 1000}) {
    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
        incrementCounter();

        return () => {
            setCounter(initialValue)
        }
    },[initialValue])

    const incrementCounter = () => {
        setInterval(() => {
            setCounter((counter) => counter + increment)
        }, interval)
    }
    
 




    return (

        <div>
            <h2>  Count : {counter}</h2>
        </div>
    )
}