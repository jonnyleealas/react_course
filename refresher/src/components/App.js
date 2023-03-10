import List from './List';
import CounterButton from './countButton/CounterButton';
import SearchBar from './SearchBar/SearchBar';
const App = () => {
    
    return (
        <>
        <List /> 
        <CounterButton incrementBy={30} buttonColor={"blue"} borderRadius={"2px"}/>
        <CounterButton incrementBy={5} buttonColor={"yellow"} borderRadius={"5px"}/>
        <CounterButton incrementBy={5} buttonColor={"green"} borderRadius={"25px"}/>
        <SearchBar />
        </>
       
    )
}


export default App