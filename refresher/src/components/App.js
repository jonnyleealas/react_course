import React, { useState, useEffect } from 'react';
import CounterButton from './countButton/CounterButton';
import SearchBar from './SearchBar/SearchBar';
import Button from './Button/Button.js';
import spinner from './images/spinner.avif';




const App = () => {
    const [productsState, setProductState] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray) => {
                const newProductsState = productsArray.map((product) => {
                    return product.description
                })
                setProductState(newProductsState)
            })       
    }, [])

    const hasProducts = productsState.length > 0
     
    return (
        <>
        <Button>Hello World</Button>
        {
            hasProducts ? <SearchBar products={productsState} /> : <img src={spinner} alt="Italian Trulli" />
        }
        </>
       
    )
}


export default App;
       