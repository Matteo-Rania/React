import { useCounter } from "./useCounter"

export function ClickCounter({initialValue = 0}) {
    const {counter, increment, decrement, reset,} = useCounter(initialValue)

    return (
        <div className="text-center">
            <h2 >{counter}</h2>
            <div className="flex  gap-2 justify-center  "> 
                <button  className="border-2 border-black p-2" onClick={increment}>AUMENTA</button>
                <button  className="border-2 border-black p-2" onClick={decrement}>DIMINUISCI</button>
                <button  className="border-2 border-black p-2" onClick={reset}>RESET</button>
            </div>
        </div>
    )
}