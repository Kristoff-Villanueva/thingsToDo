import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import ToDo from "./components/ToDo";

function App() {
	const [displayInput, setDisplayInput] = useState(true);
	const [listCount, setListCount] = useState(0);
	const [displaySearch, setDisplaySearch] = useState(false);
	const [searching, setSearching] = useState(false);

	return (
		<div className="container">
			<ToDo
				displayInput={displayInput}
				displaySearch={displaySearch}
				setListCount={setListCount}
				setSearching={setSearching}
				searching={searching}
			/>
			<Footer
				setDisplayInput={setDisplayInput}
				setDisplaySearch={setDisplaySearch}
				listCount={listCount}
				setSearching={setSearching}
				searching={searching}
			/>
		</div>
	);
}

export default App;
