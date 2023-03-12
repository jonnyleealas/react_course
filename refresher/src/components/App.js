import React, { useState, useEffect } from 'react';
import CounterButton from './countButton/CounterButton';
import SearchBar from './SearchBar/SearchBar';
import spinner from './images/spinner.avif';


const sportsTeams = [
    'lakers',
    'celtics',
    'clippers',
    'real madrid', 
    'yankees'
]

const ufcFighters = [
    'jon jones',
    'daniel cormier',
    'conor mcgregor',
    'anderson silva',
    'georges st pierre',
]


const App = () => {
    const [productsState, setProductState] = useState([])


    useEffect(() => {
        setTimeout(() => {
            setProductState([
                'tooth brush',
                'tooth paste',
                'mouth wash',
                'dental floss',
                'mouth guard',
            ])
        }, 2000)
    }, [])

    const hasProducts = productsState.length > 0
     
    return (
        <>
        {
            hasProducts ? <SearchBar products={productsState} /> : <img src={spinner} alt="Italian Trulli" />
        }
        </>
       
    )
}


export default App;
       