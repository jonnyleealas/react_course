import React from 'react';

const CounterButton = () => {
    let currentCount = 0;
    const handleClick = () => {
       currentCount++
    
    }
    return (
        
        <div>
            <button onClick={handleClick}>Counter</button>
            <div>
                {currentCount}
            </div>
        </div>
        
        
    )
}


export default CounterButton;