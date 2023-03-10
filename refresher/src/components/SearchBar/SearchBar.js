import React from 'react';
import './SearchBar.css';

const SearchBar = () => {

    const handleInputChange = (event) => {
        console.log(event.target.value)
    }
    return (
    <div>
        <input type='text' value='' onChange={handleInputChange}></input>
    </div>
    )
}

export default SearchBar;