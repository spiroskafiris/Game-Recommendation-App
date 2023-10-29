import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Favorites() {
    const [gameData, setGameData] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7221/games").then((response) => {
          //console.log(response.data)
          setGameData((existingData) => {
            return response.data;
          });
        });
      }, []);
    
    function removefromfav(id){
        var payload = {
            id:id,
            img: gameData[id-1].img,
            title: gameData[id-1].title,
            developer: gameData[id-1].developer,
            genres: gameData[id-1].genres,
            rating: 50,
            description: gameData[id-1].description,
            isFavorite: false
            }
            console.log(payload)

          axios.put('https://localhost:7221/games', payload)
          .then((response) => {
              console.log(response.data);
          })
          .catch((error) => {
              console.error(error);
              console.log("faaaaaild");
          });
    }
    return(
        <>
        <h1>Your favorite games are:</h1>
        <Row xs={1} md={3} className="cards">
          {
            gameData.filter((game) => game.isFavorite==true).map(filteredGames => (
            <Col key={filteredGames.id}>
              <Card>
                <Card.Img
                className="card--img" variant="top" src={filteredGames.img} />
                <Card.Body className="card--text">
                  <Card.Title ><b>Title: </b>{filteredGames.title}</Card.Title>
                  <Card.Text >
                    <b>Developer:</b> {filteredGames.developer}
                  </Card.Text>
                  <Card.Text >
                    <b>Genres:</b> {filteredGames.genres}
                  </Card.Text>
                  <Card.Text >
                    <b>Rating:</b> {filteredGames.rating}
                  </Card.Text>
                  <Card.Text >
                    <b>Description:</b> {filteredGames.description}
                  </Card.Text>

                  <button id="addtofav-btn" className="addtofav-btn" onClick={(e) => removefromfav(filteredGames.id)}>Remove</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </>
    )
}

export default Favorites;