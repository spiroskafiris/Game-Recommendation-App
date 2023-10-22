import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardCreate() {

    const [gameData, setGameData] = useState([])

    //this is from the indian guy
    useEffect(() => {
      axios.get("https://localhost:7221/games").then((Response) => {
        setGameData((existingData) => {
          return Response.data;
        });
      });
    }, []);



    // const handleChange = (event) => {
    //   const { name, value, type } = event.target
  
    //     setFormData({
    //       ...gameData,
    //       [event.target.name]: event.target.value
    //     })
  
    // }

    // const handleSubmit = (event) => {
        
    //     event.preventDefault()
        
    //     console.log(gameData)

    //     fetch('https://localhost:7221/swagger/games', {
    //       method: 'GET',
    //       body: JSON.stringify(gameData), 
    //         /*JSON.stringify({
    //          title: title,
    //          body: body,
    //          userId: Math.random().toString(36).slice(2),
            
    //       }), */
    //       headers: {
    //          'Content-type': 'application/json; charset=UTF-8',
    //       },
    //    })
    //       .then((res) => {
    //         console.log(res.json())
            
    //       })         
    //       .catch((err) => {
    //          console.log(err.message);
    //       });


    // }

    return(
        <>
        <Row xs={1} md={3} className="g-4 mt-1">
          {
          gameData.map((game) => (
            <Col key={game.Id}>
              <Card>
                {/* <Card.Img variant="top" src={game.imgurl} /> */}
                <Card.Body>
                  <Card.Title>game.Title</Card.Title>
                  <Card.Text>
                    <b>Developer:</b> {game.Developer}
                  </Card.Text>
                  <Card.Text>
                    <b>Genres:</b> {game.Genres}
                  </Card.Text>
                  <Card.Text>
                    <b>Rating:</b> {game.Rating}
                  </Card.Text>
                  <Card.Text>
                    <b>Description:</b> {game.Description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </>
    )
}

export default CardCreate()