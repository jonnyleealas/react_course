/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const reactContentRoot = document.getElementById("root")
const inputTest = React.createElement("input")


const item = "whats up dude"
const myJSXElement = (
    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>whats up doc</li>
        <li>{item.toLocaleUpperCase()}</li>
    </ul>
)


ReactDOM.render(myJSXElement, reactContentRoot)