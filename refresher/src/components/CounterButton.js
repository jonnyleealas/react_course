import React, { useState } from 'react';

const CounterButton = (props) => {
    let [currentCount, setCurrentCount] = useState(0)

    const addButton = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    const subtractButton = () => {
        setCurrentCount(currentCount - props.incrementBy)
    }

    return (
        
        <div>
            <button onClick={addButton}>+</button>
            <button onClick={subtractButton}>-</button>
            <div>
                {currentCount}
            </div>
        </div>
        
        
    )
}


export default CounterButton;