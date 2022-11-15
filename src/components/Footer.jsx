import React from "react";

function Footer(props) {
	function handleClick() {
		props.setDisplayInput((prevState) => !prevState);
		props.setDisplaySearch(false);
		props.setSearching(false);
	}

	function handleSearchClick() {
		props.setDisplaySearch((prevState) => !prevState);
		props.setDisplayInput(false);
	}

	return (
		<div className="footer">
			<div className="footer-group1">
				<p className="footer-item" onClick={handleClick}>
					➕
				</p>
				<p className="footer-item" onClick={handleSearchClick}>
					🔍
				</p>
				<p className="items">{props.listCount} items left</p>
			</div>

			<div className="footer-group2">
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
		</div>
	);
}

export default Footer;
