import React from "react"

export default function HogFilter({filter, setFilter}){

    function toggleFilter(){
        setFilter(prevFilter => !prevFilter)
    }
    return(
        <button onClick={toggleFilter}>{filter ? "Show Me All Hogs" : "Show Me Greased Hogs"}</button>
    )
}