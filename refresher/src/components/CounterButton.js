import React, { useState } from 'react';

const CounterButton = (props) => {
    console.log(props)
    let [currentCount, setCurrentCount] = useState(0)

    const addButton = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    const subtractButton = () => {
        setCurrentCount(currentCount - props.incrementBy)
    }

    const buttonStyles = {
        background: props.buttonColor,
        borderRadius: props.borderRadius,
    }

    return (
        
        <div>
            <button style={buttonStyles}onClick={addButton}>+{props.incrementBy}</button>
            <button onClick={subtractButton}>-{props.incrementBy}</button>
            <div>
                {currentCount}
            </div>
        </div>
        
        
    )
}


export default CounterButton;