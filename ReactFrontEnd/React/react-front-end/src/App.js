import './App.css';
import CardCreate from './components/CardCreate';
import NewLogin from './components/NewLogin';
import Favorites from './components/Favorites';
import {Routes, Route, Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {  
    return(
    <>
    <header>
        <h1>Game Showcase App</h1>
        <Navbar className="navbar">
            <Container>
                <Nav className="nav-elements">
                  <Nav.Link href="/NewLogin" className="nav-elements">Log in</Nav.Link>
                  <Nav.Link href="/CardCreate" className="nav-elements">Categories</Nav.Link>
                  <Nav.Link href="/Favorites" className="nav-elements">Favorites</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <nav>
          <ul>  
              <Routes>
                <Route path="/NewLogin" element={<NewLogin/>} />
                <Route path='/CardCreate' element={<CardCreate/>} />
                <Route path='/Favorites' element={<Favorites/>} />
              </Routes>
          </ul>
        </nav>
      </header>
    </>)
}

export default App;