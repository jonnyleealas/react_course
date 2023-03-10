import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')
    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

const ClearButton = () => {
        setSearchValue('')
}
    return (
    <div>
        <input type='text' value={searchValue} onChange={handleInputChange}></input>
        <button onClick={ClearButton}>Clear</button>
        {searchValue}
    </div>
    )
}

export default SearchBar;