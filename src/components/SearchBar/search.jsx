import React, { useEffect, useState } from "react";
import "./Search.css";
import { SearchInput } from "./searchInput/SearchInput";
import { SearchList } from "./searchList/SearchList";
import axios from 'axios';
import { SelectedContent } from "./selectedContent/SelectedContent";

const API_URL =
    "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

export const Search = () => {
    //              --------state------------
    const [searchInputValue, setSearchInputvalue] = useState("");
    const [searchListValue, setSearchListValue] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [selected, setSelected] = useState(false);

    //              ---------API Call--------
    const fetchSearchList = async () => {
        // const response= await axios(API_URL+'&query'+searchInputValue); //old method
        // const response= await axios(`${API_URL}&query${searchInputValue}`); // template literals method
        const response = await axios(API_URL, {
            params: {
                query: 'movie',
            }
        });                                         // best practice

        setSearchListValue(response.data.results);
        setFilteredList(response.data.results);
    }

    useEffect(() => {
        fetchSearchList();
    }, [])

    //input-box handling
    const handleChange = (event) => {
        setSearchInputvalue(event.target.value);
        const newFilteredList = searchListValue.filter((data) => {
            return data.title.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setFilteredList(newFilteredList);
    }

    //clear button handling
    const handleClearButton = () => {
        setSearchInputvalue("");
        setFilteredList(searchListValue);
    }

    // selected content handling
    // const handleSeclectedContent = (event) => {
    //     <div className="selected-content">
    //         <img src={event.target.innerHTML} />
    //         <p> {event.target.innerText}</p>

    //     </div>

    //     // console.log(event.target.innerText);
    //     console.log(event.target.innerHTML);
    //     setSelected(true);
    // }


    return (
        <div>
            <div className="search-container">
                <div className="title">
                    <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                    <p>Looking for movies? </p>
                </div>

                <SearchInput searchInputValue={searchInputValue}
                    handleChange={handleChange}
                    handleClearButton={handleClearButton} />

                {selected ? <SelectedContent>
                    <div className="selected-content">
                        <img src="" alt="selected-content" />
                        <p> Selected content</p>
                    </div>

                </SelectedContent>
                    : <SearchList searchListValue={searchListValue} filteredList={filteredList} />}

            </div>
        </div>
    );
};
