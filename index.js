/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const reactContentRoot = document.getElementById("root")
const inputTest = React.createElement("input")

const myFirstElement = React.createElement("ul",null, 
    React.createElement = React.createElement(
        "li", null, [
            React.createElement("li", null, "item1"),
            React.createElement("li", null, "item2"),
            React.createElement("li", null, "item3"),
            React.createElement("li", null, "whats up doc"),
            inputTest, inputTest
        ]
    )
)


ReactDOM.render(myFirstElement, reactContentRoot)