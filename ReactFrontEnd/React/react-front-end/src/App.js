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
           <li><Link to='/LoginPage' style={{color: "black"}}>Please Log in here.</Link></li>
           {/* <li><Link to='/CategoriesSelector' style={{color: "blue"}}>Categories</Link></li> */}
           <li><Link to='/CategoriesSelector' style={{color: "black"}}>Categories</Link></li>
            
              <Routes>
                <Route path="/LoginPage" element={<LoginPage/>} />
                {/* <Route path="/CategoriesSelector" element={<CategoriesSelector/>} /> */}
                <Route path='/CategoriesSelector' element={<CardCreate/>} /> 
              </Routes>
                          
          </ul>
        </nav>
      </header>
    </>)
}

export default App;