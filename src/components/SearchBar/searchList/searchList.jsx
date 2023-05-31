import React from "react";
import "./SearchList.css";

export const SearchList = ({ searchListValue, filteredList }) => {
	return (
		<div>
			<div className="search-list-container" >
				
				{filteredList.map((data) => (
					<div className="content" key={data.id}>

						<img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
						<p> {data.title}</p>
					</div>
				))}



			</div>
		</div>
	);
};
