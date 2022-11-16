import React from "react";
import { nanoid } from "nanoid";

function ToDo(props) {
	// Hooks
	const [inputText, setInputText] = React.useState([]);
	const [newInput, setNewInput] = React.useState("");
	const [searchText, setSearchText] = React.useState([]);
	const inputRef = React.useRef();
	React.useEffect(() => {
		props.setListCount(inputText.length);
	});

	// Rendering of elements in JSX

	const toDoElements = inputText.map((el) => {
		return (
			<div id={el} className="toDoElement" key={nanoid()}>
				<input type="checkbox" name="" id={el} />
				<label htmlFor={el}>{el}</label>
				<p onClick={handleDelete} className="delete">
					❌
				</p>
			</div>
		);
	});

	const searchElements = searchText.map((el) => {
		return (
			<div className="toDoElement" key={nanoid()}>
				<input type="checkbox" name="" id={el} />
				<label htmlFor={el}>{el}</label>
			</div>
		);
	});

	// functions

	function handleDelete(event) {
		const toDeleteElement = event.target.parentElement.id;
		setInputText((prevInputText) => {
			return prevInputText.filter((item) => item !== toDeleteElement);
		});
	}

	function handleChange(event) {
		setNewInput(event.target.value);
	}

	function handleKeyDown(event) {
		if (event.key === "Enter") {
			setInputText((prevInputText) => [newInput, ...prevInputText]);
			inputRef.current.value = "";
		}
	}

	function handleSearch(event) {
		props.setSearching(true);
		setSearchText(
			inputText.filter((text) => text.includes(event.target.value))
		);
	}

	return (
		<div className="toDo">
			<h1>Things To Do</h1>
			{props.displayInput && (
				<input
					autoFocus
					ref={inputRef}
					type="text"
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					placeholder="What do you want to get done?"
					className="search-bar"
				/>
			)}
			{props.displaySearch && (
				<input
					autoFocus
					type="text"
					placeholder="Search"
					className="search-bar"
					onChange={handleSearch}
				/>
			)}
			{props.searching ? searchElements : toDoElements}
		</div>
	);
}

export default ToDo;
