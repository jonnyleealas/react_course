import List from './List';
import CounterButton from './CounterButton';

const App = () => {
    
    return (
        <>
        <List /> 
        <CounterButton incrementBy={30}/>
        <CounterButton incrementBy={5}/>
        </>
       
    )
}


export default App