import { useState } from "react";

export function ClickCounter({initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue);

    const handleCounterIncrement = () => {
        setCounter(c => c + 1)
    }

    return (

        <div className="flex m-6 flex-col">
            <h2>  Count : {counter}</h2>
            <button  className='border-2 border-black w-[fit-content] p-2 ' onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}