import React from "react";
import "./SearchList.css";

export const SearchList = ({ searchListValue, handleSeclectedContent }) => {


	return (
		<div>
			<div className="search-list-container" >

				{searchListValue.map((data) => (
					<div className="content" onClick={handleSeclectedContent} key={data.id}>

						<img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
						<p> {data.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};
