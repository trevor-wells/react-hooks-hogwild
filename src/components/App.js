import React, {useState} from "react"
import Nav from "./Nav"
import HogSort from "./HogSort"
import HogFilter from "./HogFilter"
import HogContainer from "./HogContainer"
import hogs from "../porkers_data"

export default function App() {

	const [filter, setFilter] = useState(false)
	const [sort, setSort] = useState("og")

	const hogsToDisplay = hogs
	.filter(hog => filter ? hog.greased : true)
	.sort((hog1, hog2) => {
		if(sort === "weight") {
			return hog1.weight - hog2.weight
		} else if (sort === "name") {
			return hog1.name.toLowerCase().localeCompare(hog2.name.toLowerCase())
		}
	})

	return (
		<div className="App">
			<Nav />
			<HogSort setSort={setSort}/>
			<HogFilter filter={filter} setFilter={setFilter}/>
			<HogContainer hogs={hogsToDisplay}/>
		</div>
	)
}