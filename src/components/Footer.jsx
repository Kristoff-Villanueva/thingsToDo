import React from "react";

function Footer(props) {
	function handleClick() {
		props.setDisplaySearch((prevState) => !prevState);
	}

	return (
		<div className="footer">
			<div className="footer-group1">
				<p className="footer-item" onClick={handleClick}>
					➕
				</p>
				<p className="footer-item">🔍</p>
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
