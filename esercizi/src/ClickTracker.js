import React from "react";

export function ClickTracker(){
    function handleClick(event){
        const h1 = document.querySelector('#h1')
        h1.textContent = event.target.textContent


    }

    return(
        <div>
            <h1 id="h1"></h1>
            <button onClick={handleClick}>primo</button>
            <button onClick={handleClick}>secondo</button>
            <button onClick={handleClick}>terzo</button>
        </div>
    )
}