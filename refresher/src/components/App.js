import CounterButton from './countButton/CounterButton';
import SearchBar from './SearchBar/SearchBar';

const products = [
    'tooth paste', 
    'tooth brush',
    'mouth wash',
    'dental floss',
    'mouth guard',
]

const sportsTeams = [
    'lakers',
    'celtics',
    'clippers',
    'real madrid', 
    'yankees'
]

const ufcFighters = [
    'jon jones',
    'daniel cormier',
    'conor mcgregor',
    'anderson silva',
    'georges st pierre',
]
const App = () => {
    
    return (
        <>
        <CounterButton incrementBy={30} buttonColor={"blue"} borderRadius={"2px"}/>
        <CounterButton incrementBy={5} buttonColor={"yellow"} borderRadius={"5px"}/>
        <CounterButton incrementBy={5} buttonColor={"green"} borderRadius={"25px"}/>
        <SearchBar products={products}/>
        <SearchBar products={sportsTeams}/>
        <SearchBar products={ufcFighters}/>
        </>
       
    )
}


export default App