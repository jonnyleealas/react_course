import React, { useState } from 'react';

const CounterButton = () => {
    let [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currentCount++)
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