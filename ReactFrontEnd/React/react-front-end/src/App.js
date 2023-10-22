import { Card } from 'react-bootstrap';
import './App.css';
import CardCreate from './components/CardCreate';
import GameCard from './components/GameCard';

// <script defer src="/src/CardCreate.js"></script>
function App() {       
    return(
    <>
    <h1>Game Recommendations App</h1>
        {/* <ul className="cards"></ul>
        <>
        <GameCard /> this works for handbuilt cards
        </> */}
        <>
        <CardCreate />
        </>
    </>)
}

export default App;