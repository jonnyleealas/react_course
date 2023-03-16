import React, { useState } from 'react';
import './SearchBar.css';



const SearchBar = (props) => {
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
    // console.log(products.map((product) => {
    //     return product.toLocaleUpperCase()
    // }))

    // Filter uses True or false, If it return true it will stay in the array. if false it will be removed from array. If we give it 'wash' it will remove every element except those that contain wash
    // Filter will filter based on the input and we use includes to return a boolean
    const filteredProducts = props.products.filter((product) => {
        return product.includes(searchValue)
    })
    return (
        <div>
            <input type='text' value={searchValue} onChange={handleInputChange}></input>
            { /*Short circuiting: if this is true we will render everything after &&; in this case we have to use includes in order to return a true or false. */
                displayButtonIfTrue && <button onClick={clearButton}>Clear</button>
            }
            
            {
                // filterProducts will return a filtered search if it includes anything in searchValue, map will go through the new array and render each thing separately to a div
                filteredProducts.map((product) => {
                    return <div key={product}>{product}</div>
                })
            }
        </div>
    )
}

export default SearchBar;