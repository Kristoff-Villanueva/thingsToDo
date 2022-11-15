import React from "react";
import { nanoid } from "nanoid";

function ToDo(props) {
	const initialToDos = ["Learn Javascript", "Study React", "Build a React App"];
	const [inputText, setInputText] = React.useState(initialToDos);
	const [newInput, setNewInput] = React.useState("");
	const inputRef = React.useRef();

	const toDoElements = inputText.map((el) => {
		return (
			<div className="toDoElement" key={nanoid()}>
				<input type="checkbox" name="" id={el} />
				<label htmlFor={el}>{el}</label>
			</div>
		);
	});

	React.useEffect(() => {
		props.setListCount(inputText.length);
	});

	function handleChange(event) {
		setNewInput(event.target.value);
	}

	function handleKeyDown(event) {
		if (event.key === "Enter") {
			setInputText((prevInputText) => [newInput, ...prevInputText]);
			inputRef.current.value = "";
		}
	}

	// function handleClick() {
	// 	console.log((inputRef.current.placeholder = ""));
	// }

	return (
		<div className="toDo">
			<h1>Things To Do</h1>
			{props.displaySearch && (
				<input
					ref={inputRef}
					type="text"
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					// onClick={handleClick}
					placeholder="What do you want to get done?"
					className="search-bar"
				/>
			)}
			{toDoElements}
		</div>
	);
}

export default ToDo;
