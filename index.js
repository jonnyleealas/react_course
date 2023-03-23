const reactContentRoot = document.getElementById('root')
const incrementBtn = document.getElementById('increment-btn')
const decrementBtn = document.getElementById('decrement-btn')
const countDisplay = document.getElementById('count-display')

const App = () => {
let currentCount = 0

incrementBtn.addEventListener('click', () => { n ,   
    currentCount++
    countDisplay.innerHTML = currentCount
})

decrementBtn.addEventListener('click', () => {
    currentCount--
    countDisplay.innerHTML = currentCount
})

    const item1 = "item1"

    return (
        <ul>
            <li>{item1}</li>
            <li>item2</li>
            <li>item3</li>
        </ul> 
    )
    
}





ReactDOM.render(<App />, reactContentRoot)




























// const countDisplay = document.getElementById('count-display')
// const incrementBtn = document.getElementById('increment-btn')
// const decrementBtn = document.getElementById('decrement-btn')

// let currentCount = 0


// incrementBtn.addEventListener('click', () => {
//     currentCount++
//     countDisplay.innerHTML = currentCount
// })

// decrementBtn.addEventListener('click', () => {
//     currentCount--
//     countDisplay.innerHTML = currentCount
// })