import React from "react"

export default function HogSort({ogHogs, setHogData}){
    return(
        <div>
            <button id="og" onClick={handleClick}>Default Order</button>
            <button id="name" onClick={handleClick}>Sort by Name</button>
            <button id="weight" onClick={handleClick}>Sort by Weight</button>
        </div>
    )
}