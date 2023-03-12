import React, { useState, useEffect } from 'react';
import './CountButton.css';

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

   // useEffect will run when page mount and can run if we add a function in  to the array in the second argument. Whenever that added function is run useEffect will also run.
    useEffect(() => {
        console.log("called when mounted or count is updated")
        if(currentCount === 10){
            alert('count reached 10')
        }
        if(currentCount === 30){
            alert('count is now 30')
            setCurrentCount(0)
            alert('now the count will go back to 0')
        }

    }, [currentCount])



    return (
        
        <div>
            <button style={buttonStyles} onClick={addButton}>+{props.incrementBy}</button>
            <button style={buttonStyles} onClick={subtractButton}>-{props.incrementBy}</button>
            <div className={'count-display'}>
                {currentCount}
            </div>
        </div>
        
        
    )
}


export default CounterButton;