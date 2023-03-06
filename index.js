const reactContentRoot = document.getElementById("root")
const myFirstElement = React.createElement("ul",null, 
    React.createElement = React.createElement(
        "li", null, [
            React.createElement("li", null, "item1"),
            React.createElement("li", null, "item2"),
            React.createElement("li", null, "item3")
        ]
    )
)
ReactDOM.render(myFirstElement, reactContentRoot)