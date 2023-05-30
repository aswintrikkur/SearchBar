import React from "react";
import "./SearchInput.css";

export const SearchInput = () => {
	return (
		<div>
			<div className="search-input-container">
				<input type="text" placeholder="Search here..." />
				<div className="close-btn">
					<button> <img src="https://w7.pngwing.com/pngs/1008/558/png-transparent-computer-icons-button-close-angle-rectangle-logo-thumbnail.png" 
					 alt="" /></button>
				</div>
			</div>
		</div>
	);
};
