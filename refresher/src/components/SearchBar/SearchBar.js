import React, { useState } from 'react';
import './SearchBar.css';

const products = [
    'tooth paste',
    'mouth wash',
    'floss',
    'mouth guard',
]

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')
    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const clearButton = () => {
        setSearchValue('')
    }
    // if searchValue length is > 0 it will equal true else it will only equal false
    const displayButtonIfTrue = searchValue.length > 0
    // map will take everything in an array and create another array out of it
    console.log(products.map((product)=>{
        return product.toLocaleUpperCase()
    }))

    // Filter uses True or false, If it return true it will stay in the array. if false it will be removed from array. If we give it 'wash' it will remove every element except those that contain wash
    const filteredProducts = products.filter((product) => {
        return product.includes(searchValue)
    })
    return (
        <div>
            <input type='text' value={searchValue} onChange={handleInputChange}></input>
            { /*Short circuiting: if this is true we will render everything after &&*/
            displayButtonIfTrue && <button onClick={clearButton}>Clear</button>
            }

             {
                filteredProducts.map((product) => {
                    return <div key={product}>{product}</div>
               })
             }
        </div>
    )
}

export default SearchBar;