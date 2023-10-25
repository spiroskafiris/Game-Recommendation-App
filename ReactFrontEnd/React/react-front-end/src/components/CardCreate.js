import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardCreate() {
    const [gameData, setGameData] = useState([]);
    const [filterTags, setFilterTags] = useState([])

    useEffect(() => {
      axios.get("https://localhost:7221/games").then((response) => {
        console.log(response.data)
        setGameData((existingData) => {
          return response.data;
        });
      });
    }, []);
    // const handleChange = (e) => { 
    
    //     console.log('The checkbox was toggled'); 
    //     var value = e.target.value;
    //     var checkedstate = e.target.checked; //this return true or false for each box
    //     console.log("the button is " + checkedstate);
      
    // }; 

    const filteredDATA = gameData.filter((game) =>
      filterTags.length > 0
        ? filterTags.every((filterTag) =>
            game.genres.includes(filterTag)
          )
        : gameData
    )
  
    const handleChange = (event) => {
      if (event.target.checked) {
        setFilterTags([...filterTags, event.target.value])
      } else {
        setFilterTags(
          filterTags.filter((filterTag) => filterTag !== event.target.value)
        )
      }
    }
    
    return(
        <>
          <h1>Choose a Game Category:</h1>
        <div className="custom-select">
            <label class="container">Soulslike
                <input type="checkbox" value="Soulslike" onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container">Soccer
                <input type="checkbox" value="Soccer" onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container">Strategy
                <input type="checkbox" value="Strategy" onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container">Fighting
                <input type="checkbox" value="Fighting" onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container">FPS
                <input type="checkbox" value="FPS" onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container">MMORPG
                <input type="checkbox" value="MMORPG" onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container">Car Soccer
                <input type="checkbox" value="Car Soccer" onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container">Ninja Shooter
                <input type="checkbox" value="Ninja Shooter" onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container">Platform
                <input type="checkbox" value="Platform" onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
        </div>


        <Row xs={1} md={3} className="cards">
          {
          // gameData.map((game) => (
            filteredDATA.map(filteredGames => (
            <Col key={filteredGames.id}>
              <Card>
                <Card.Img
                className="card--img" variant="top" src={filteredGames.img} />
                <Card.Body className="card--text">
                  <Card.Title ><b>Title: </b>{filteredGames.title}</Card.Title>
                  <Card.Text>
                    <b>Developer:</b> {filteredGames.developer}
                  </Card.Text>
                  <Card.Text>
                    <b>Genres:</b> {filteredGames.genres}
                  </Card.Text>
                  <Card.Text>
                    <b>Rating:</b> {filteredGames.rating}
                  </Card.Text>
                  <Card.Text>
                    <b>Description:</b> {filteredGames.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </>
    )
}

export default CardCreate;