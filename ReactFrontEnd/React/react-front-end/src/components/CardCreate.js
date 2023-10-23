import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardCreate() {
    const [gameData, setGameData] = useState([]);

    //this
    useEffect(() => {
      axios.get("https://localhost:7221/games").then((response) => {
        console.log(response.data)
        setGameData((existingData) => {
          return response.data;
        });
      });
    }, []);

    return(
        <>
        <Row xs={1} md={3} className="cards">
          {
          gameData.map((game) => (
            <Col key={game.id}>
              <Card>
                <Card.Img
                className="card--img" variant="top" src={game.img} />
                <Card.Body className="card--text">
                  <Card.Title ><b>Title: </b>{game.title}</Card.Title>
                  <Card.Text>
                    <b>Developer:</b> {game.developer}
                  </Card.Text>
                  <Card.Text>
                    <b>Genres:</b> {game.genres}
                  </Card.Text>
                  <Card.Text>
                    <b>Rating:</b> {game.rating}
                  </Card.Text>
                  <Card.Text>
                    <b>Description:</b> {game.description}
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