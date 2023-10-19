import logo from './logo.svg';
import './App.css';

function App() { 
  
// const cards = document.querySelector('.cards')

      
    for(let i = 0; i < 10; i++) {
        const card = document.createElement('li')
        card.classList.add('card')

        const cardtitle = document.createElement('h2')
        cardtitle.classList.add('card--title')
        // cardtitle.innerText = 'Bulbasaur'
        cardtitle.innerText = "Fifa"         // data[i].name
        // symbol.innerText = cellValues[i]
        // cellValues[i] = symbols[0]

        // const cardimg1 = document.createElement('img')    This is for the images
        // cardimg1.classList.add('card--img')
        // cardimg1.width = "256"
        // cardimg1.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + (i + 1) +".png"
        
        // const cardimg2 = document.createElement('img')
        // cardimg2.classList.add('card--img')
        // cardimg2.width = "256"
        // cardimg2.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (i + 1) +".png"
        
        // const pokeimages = [cardimg1, cardimg2]
        // cardimg1.addEventListener('click', function () {
        //     pokeimages.reverse()
        //     card.append(pokeimages[0])
        // })

        const cardtext = document.createElement('ul')
        cardtext.classList.add("card--text")

        // data[i].stats.base_stat
        const cardhp = document.createElement('li')
        cardhp.innerText = 'HP: ' + "hp of card"
        const cardattk = document.createElement('li')
        cardattk.innerText = 'ATTACK: ' + "attack of card"
        const carddef = document.createElement('li')
        carddef.innerText = 'DEFENSE: ' + "def of card"
        const cardspattk = document.createElement('li')
        cardspattk.innerText = 'SPECIAL-ATTACK: ' + "spec attack of card"
        const cardspdef = document.createElement('li')
        cardspdef.innerText = 'SPECIAL-DEFENSE: ' + "spec def of card"
        const cardspeed = document.createElement('li')
        cardspeed.innerText = 'SPEED: ' + "speed of card"

        // const gamesin = []
        // for (let j = 0; j <20; j++) {
        //     gamesin.push(data[i].game_indices[j].version.name)
        // }
        // const gameindices = document.createElement('li')
        // gameindices.innerText = 'GAMES: ' + gamesin
            
        card.append(cardtitle)
        // card.append(pokeimages[0])

        cardtext.append(cardhp)
        cardtext.append(cardattk)
        cardtext.append(carddef)
        cardtext.append(cardspattk)
        cardtext.append(cardspdef)
        cardtext.append(cardspeed)
        // cardtext.append(gameindices)
        card.append(cardtext)

        // cards.append(card)
        console.log(card);
        

    }
    return(
    <>
    <h1>Pokemon Trading Cards</h1>
     <li class="card">
            <h2 class="card--title">Fifa</h2>
            <img
                width="256"
                class="card--img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXfWhRGbNG7ehxRBMiyDU5gHvMM3DssXaIjOr5KocdSuLo1UEO7QkIk7BtN0-l29x8Mc&usqp=CAU"
            />
            <ul class="card--text">
                <li>HP: 45</li>
                <li>ATTACK: 49</li>
                <li>DEFENSE: 49</li>
                <li>SPECIAL-ATTACK: 65</li>
                <li>SPECIAL-DEFENSE: 65</li>
                <li>SPEED: 45</li>
            </ul>
     </li>

     <li class="card">
            <h2 class="card--title">Call of Duty</h2>
            <img
                width="256"
                class="card--img"
                src="https://images.immediate.co.uk/production/volatile/sites/3/2021/04/Call-of-Duty.jpg-d196774.png?quality=90&webp=true&resize=620,414"
            />
            <ul class="card--text">
                <li>HP: 45</li>
                <li>ATTACK: 49</li>
                <li>DEFENSE: 49</li>
                <li>SPECIAL-ATTACK: 65</li>
                <li>SPECIAL-DEFENSE: 65</li>
                <li>SPEED: 45</li>
            </ul>
     </li>

    </>)
    
}


export default App;
