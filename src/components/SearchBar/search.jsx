import React from "react";
import "./Search.css";
import { SearchInput } from "./searchInput/SearchInput";
import { SearchList } from "./searchList/SearchList";

export const Search = () => {
    return (
        <div>
            <div className="search-container">
                <div className="title">
                    <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                    <p>Looking for movies? </p>
                </div>
                <SearchInput />
                <SearchList />
            </div>
        </div>
    );
};
