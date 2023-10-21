function GameCard() {
    return(
        <>
        <li className="card">
            <h2 className="card--title">Fifa</h2>
            <img
                width="256"
                className="card--img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXfWhRGbNG7ehxRBMiyDU5gHvMM3DssXaIjOr5KocdSuLo1UEO7QkIk7BtN0-l29x8Mc&usqp=CAU"
            />
            <ul className="card--text">
                <li>HP: 45</li>
                <li>ATTACK: 49</li>
                <li>DEFENSE: 49</li>
                <li>SPECIAL-ATTACK: 65</li>
                <li>SPECIAL-DEFENSE: 65</li>
                <li>SPEED: 45</li>
            </ul>
        </li>
        
        <li className="card">
            <h2 className="card--title">Call of Duty</h2>
            <img
                width="256"
                className="card--img"
                src="https://images.immediate.co.uk/production/volatile/sites/3/2021/04/Call-of-Duty.jpg-d196774.png?quality=90&webp=true&resize=620,414"
            />
            <ul className="card--text">
                <li>HP: 45</li>
                <li>ATTACK: 49</li>
                <li>DEFENSE: 49</li>
                <li>SPECIAL-ATTACK: 65</li>
                <li>SPECIAL-DEFENSE: 65</li>
                <li>SPEED: 45</li>
            </ul>
        </li>
        </>
    )
}

export default GameCard;