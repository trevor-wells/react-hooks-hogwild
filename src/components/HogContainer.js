import React from "react"
import Tile from "./Tile"

export default function HogContainer({hogs}){

    const hogTiles = hogs.map(hog =>
    <Tile
        key={hog.name}
        hog={hog}
    />)

    return(
        <div>
            {hogTiles}
        </div>
    )
}