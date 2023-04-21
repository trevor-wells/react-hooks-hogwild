import React, {useState} from "react"

export default function Tile({hog}){

    const [isFlipped, setIsFlipped] = useState(false)

    function toggleFlipped(){
        setIsFlipped(prevState => !prevState)
    }

    return(
        <div onClick={toggleFlipped} className="pigTile">
            {!isFlipped && <img className="porker" src={hog.image}/>}
            {!isFlipped && <h3>{hog.name}</h3>}
            {isFlipped && <p><b>Specialty:</b> {hog.specialty}</p>}
            {isFlipped && <p><b>Greased:</b> {hog.greased ? "Yes" : "No"}</p>}
            {isFlipped && <p><b>Weight:</b> {hog.weight} stone</p>}
            {isFlipped && <p><b>Highest Medal:</b> {hog["highest medal achieved"]}</p>}
        </div>
    )
}