import React from "react";
import { nanoid } from "nanoid";

function ToDo(props) {
	// Hooks
	const [inputText, setInputText] = React.useState([]);
	const [completed, setCompleted] = React.useState([]);
	const [newInput, setNewInput] = React.useState("");
	const [searchText, setSearchText] = React.useState([]);
	const [currentEdit, setCurrentEdit] = React.useState("");
	const inputRef = React.useRef();
	React.useEffect(() => {
		props.setListCount(inputText.length);
	});

	// Rendering of elements in JSX

	const toDoElements = inputText.map((el) => {
		return (
			<div id={el} className="toDoElement" key={`div-${el}`}>
				<input
					onChange={handleCheck}
					type="checkbox"
					name=""
					id={`input-${el}`}
				/>
				<label
					contentEditable={true}
					suppressContentEditableWarning={true}
					onChange={handleChange}
					className="label"
					id={`label-${el}`}
				>
					{el}
				</label>
				<p onClick={handleDelete} className="delete">
					❌
				</p>
			</div>
		);
	});

	const searchElements = searchText.map((el) => {
		return (
			<div id={el} className="toDoElement" key={nanoid()}>
				<input type="checkbox" name="" id={`input-${el}`} />
				<label htmlFor={`input-${el}`} className="label">
					{el}
				</label>
				<p
					onClick={handleSearchDelete}
					onChange={handleChange}
					className="delete"
				>
					❌
				</p>
			</div>
		);
	});

	// functions

	function handleChange(event) {
		setCurrentEdit(event.target.id.slice(6));
		const index = inputText.indexOf(currentEdit);
		const newText = event.target.textContent;
		const newInputText = [...inputText];
		newInputText[index] = newText;
		setInputText(newInputText);
	}

	function handleCheck(event) {
		const labelEl = event.target.nextElementSibling;
		if (event.target.checked) {
			labelEl.classList.add("strikethrough");
			setCompleted((prev) => [...prev, labelEl.textContent]);
			// console.log(completed);
		} else {
			labelEl.classList.remove("strikethrough");
			setCompleted((prev) => {
				return [...prev].filter((el) => el !== labelEl.textContent);
			});
		}
	}

	function handleSearchDelete(event) {
		const toDeleteElement = event.target.parentElement.id;
		const filteredInputText = [...inputText].filter((item) => {
			return item !== toDeleteElement;
		});
		setSearchText((prevSearchText) => {
			return prevSearchText.filter((item) => item !== toDeleteElement);
		});
		setInputText(filteredInputText);
		// setInputText([...searchText].filter((item) => item !== toDeleteElement));
	}

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

	// Rendering

	return (
		<div className="toDo">
			<h1 onClick={() => console.log(inputText)}>Things To Do</h1>
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
