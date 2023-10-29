import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Navigate } from "react-router-dom";
import { useRef } from "react";

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
    
    //post
    const cardTitle = useRef("");
    const cardImg = useRef("");
    const cardDev = useRef("");
    const cardGen = useRef("");
    const cardRat = useRef("");
    const cardDes = useRef("");

    function addtofav() {
      var payload = {
        title: cardTitle.current.value,
        img: cardImg.current.value,
        developer: cardDev.current.value,
        genres: cardGen.current.value,
        rating: cardRat.current.value,
        description: cardDes.current.value,//Col.filteredGames.description
      }
      axios.post("https://localhost:7221/games",payload).then((response) => {
        Navigate("/CardCreate");

      })
    }

    return(
        <>
          <h1>Choose a Game Category:</h1>
        
            <label class="container2">Action
                <input type="checkbox" value="Action ," onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container2">Co-op
                <input type="checkbox" value="Co-op ," onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container2">Online
                <input type="checkbox" value="Online ," onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container2">Fighting
                <input type="checkbox" value="Fighting ," onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container2">FPS
                <input type="checkbox" value="FPS ," onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container2">MMORPG
                <input type="checkbox" value="MMORPG ," onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container2">Cars
                <input type="checkbox" value="Cars ," onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container2">Ninja Shooter
                <input type="checkbox" value="Ninja Shooter ," onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container2">Soulslike
                <input type="checkbox" value="Soulslike ," onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container2">Atmospheric
                <input type="checkbox" value="Atmospheric ," onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container2">Survival
                <input type="checkbox" value="Survival ," onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container2">Racing
                <input type="checkbox" value="Racing ," onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container2">Soccer
                <input type="checkbox" value="Soccer ," onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>
            <label class="container2">Strategy
                <input type="checkbox" value="Strategy ," onChange={handleChange}/>
                <span class="checkmark"></span>
            </label>

        <h1>The best games for you are:</h1>
        <Row xs={1} md={3} className="cards">
          {
            filteredDATA.map(filteredGames => (
            <Col key={filteredGames.id}>
              <Card>
                <Card.Img
                className="card--img" variant="top" src={filteredGames.img} ref={cardImg}/>
                <Card.Body className="card--text">
                  <Card.Title ref={cardTitle}><b>Title: </b>{filteredGames.title}</Card.Title>
                  <Card.Text ref={cardDev}>
                    <b>Developer:</b> {filteredGames.developer}
                  </Card.Text>
                  <Card.Text ref={cardGen}>
                    <b>Genres:</b> {filteredGames.genres}
                  </Card.Text>
                  <Card.Text ref={cardRat}>
                    <b>Rating:</b> {filteredGames.rating}
                  </Card.Text>
                  <Card.Text ref={cardDes}>
                    <b>Description:</b> {filteredGames.description}
                  </Card.Text>

                  <button id="addtofav-btn" className="addtofav-btn" onClick={addtofav}>Favorite</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </>
    )
}

export default CardCreate;