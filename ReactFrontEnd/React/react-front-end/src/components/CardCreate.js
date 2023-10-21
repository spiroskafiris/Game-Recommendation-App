function CardCreate() {
    const cards = document.querySelector('.cards')
    for(let i = 0; i < 10; i++) {
        const card = document.createElement('li')
        card.classList.add('card')
        const cardtitle = document.createElement('h2')
        cardtitle.classList.add('card--title')
        cardtitle.innerText = "Fifa"         // data[i].name
        const cardtext = document.createElement('ul')
        cardtext.classList.add("card--text")
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
        card.append(cardtitle)
        cardtext.append(cardhp)
        cardtext.append(cardattk)
        cardtext.append(carddef)
        cardtext.append(cardspattk)
        cardtext.append(cardspdef)
        cardtext.append(cardspeed)
        card.append(cardtext)
        cards.append(card)
    }

    console.log(cards)
    // return(
    //     <>
    //     {cards}
    //     </>
    // )
}

CardCreate()