import React, {useState} from "react"
import Nav from "./Nav"
import HogSort from "./HogSort"
import HogFilter from "./HogFilter"
import HogContainer from "./HogContainer"
import hogs from "../porkers_data"

function App() {

	const [hogData, setHogData] = useState(hogs)
	const [filter, setFilter] = useState(false)

	const hogsToDisplay = filter ? hogData.filter(hog => hog.greased === filter) : hogData

	return (
		<div className="App">
			<Nav />
			<HogSort setHogData={setHogData}/>
			<HogFilter filter={filter} setFilter={setFilter}/>
			<HogContainer hogs={hogsToDisplay}/>
		</div>
	);
}

export default App;
