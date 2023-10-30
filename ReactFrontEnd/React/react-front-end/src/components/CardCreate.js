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
        //console.log(response.data)
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

      function addtofav(id) {
            // var payload = {
            //   id:id,
            //   img: gameData[id-1].img,
            //   title: gameData[id-1].title,
            //   developer: gameData[id-1].developer,
            //   genres: gameData[id-1].genres,
            //   rating: gameData[id-1].rating,
            //   description: gameData[id-1].description,
            //   isFavorite: true
            //   }
            //   console.log(payload)

            axios.get('https://localhost:7221/games/fav/'+ id) //this should be a put if I want to use payload
            .then((response) => {
                console.log("from the get inside fav");
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
                console.log("failed");
            });
      }
 
    return(
        <>
          <h1>Choose a Game Category:</h1>
        
            <label className="container2">Action
                <input type="checkbox" value="Action ," onChange={handleChange}/>
                <span className="checkmark"></span>
            </label>
            <label className="container2">Co-op
                <input type="checkbox" value="Co-op ," onChange={handleChange}/>
                <span className="checkmark"></span>
            </label>
            <label className="container2">Online
                <input type="checkbox" value="Online ," onChange={handleChange}/>
                <span className="checkmark"></span>
            </label>
            <label className="container2">Fighting
                <input type="checkbox" value="Fighting ," onChange={handleChange}/>
                <span className="checkmark"></span>
            </label>
            <label className="container2">FPS
                <input type="checkbox" value="FPS ," onChange={handleChange}/>
                <span className="checkmark"></span>
            </label>
            <label className="container2">Cars
                <input type="checkbox" value="Cars ," onChange={handleChange}/>
                <span className="checkmark"></span>
            </label>
            <label className="container2">Ninja Shooter
                <input type="checkbox" value="Ninja Shooter ," onChange={handleChange}/>
                <span className="checkmark"></span>
            </label>
            <label className="container2">Soulslike
                <input type="checkbox" value="Soulslike ," onChange={handleChange}/>
                <span className="checkmark"></span>
            </label>
            <label className="container2">Atmospheric
                <input type="checkbox" value="Atmospheric ," onChange={handleChange}/>
                <span className="checkmark"></span>
            </label>
            <label className="container2">Survival
                <input type="checkbox" value="Survival ," onChange={handleChange}/>
                <span className="checkmark"></span>
            </label>
            <label className="container2">Racing
                <input type="checkbox" value="Racing ," onChange={handleChange}/>
                <span className="checkmark"></span>
            </label>
            <label className="container2">Soccer
                <input type="checkbox" value="Soccer ," onChange={handleChange}/>
                <span className="checkmark"></span>
            </label>
            <label className="container2">Strategy
                <input type="checkbox" value="Strategy ," onChange={handleChange}/>
                <span className="checkmark"></span>
            </label>

        <h1>The best games for you are:</h1>
        <Row xs={1} md={3} className="cards">
          {
            filteredDATA.map(filteredGames => (
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

                  <button id="addtofav-btn" className="addtofav-btn" onClick={(e) => addtofav(filteredGames.id)}>Favorite</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </>
    )
}

export default CardCreate;