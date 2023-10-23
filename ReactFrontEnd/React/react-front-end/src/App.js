import './App.css';
import CardCreate from './components/CardCreate';
import LoginPage from './components/LoginPage';
import {Routes, Route, Link} from 'react-router-dom'

function App() {   
    
    


    return(
    <>
    <header>
        <h1>Game Recommendations App</h1>
        <nav>
          <ul>
           <li><Link to='/LoginPage'>LoginPage</Link></li>
           <li><Link to='/CardCreate'>CardCreate</Link></li>
            
              <Routes>
                <Route path="/LoginPage" element={<LoginPage/>} />
                <Route path='/CardCreate' element={<CardCreate/>} /> 
              </Routes>
                          
          </ul>
        </nav>
      </header>
    </>)
}

export default App;