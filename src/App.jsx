import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import ToDo from "./components/ToDo";

function App() {
	const [displaySearch, setDisplaySearch] = useState(true);
	const [listCount, setListCount] = useState(0);

	return (
		<div className="container">
			<ToDo displaySearch={displaySearch} setListCount={setListCount} />
			<Footer setDisplaySearch={setDisplaySearch} listCount={listCount} />
		</div>
	);
}

export default App;
