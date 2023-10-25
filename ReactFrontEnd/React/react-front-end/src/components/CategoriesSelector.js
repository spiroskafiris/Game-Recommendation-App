function CategoriesSelector(){
    
return(
    <>
    <h1>Choose a Game Category:</h1>
        <div className="custom-select">
            <label class="container">Soulslike
                <input type="checkbox" value="Soulslike" checked="checked"/>
                <span class="checkmark"></span>
            </label>
            <label class="container">Soccer
                <input type="checkbox" value="Soccer"/>
                <span class="checkmark"></span>
            </label>
            <label class="container">Strategy
                <input type="checkbox" value="Strategy"/>
                <span class="checkmark"></span>
            </label>
            <label class="container">Fighting
                <input type="checkbox" value="Fighting"/>
                <span class="checkmark"></span>
            </label>
            <label class="container">FPS
                <input type="checkbox" value="FPS" checked="checked"/>
                <span class="checkmark"></span>
            </label>
            <label class="container">MMORPG
                <input type="checkbox" value="MMORPG"/>
                <span class="checkmark"></span>
            </label>
            <label class="container">Car Soccer
                <input type="checkbox" value="Car Soccer"/>
                <span class="checkmark"></span>
            </label>
            <label class="container">Ninja Shooter
                <input type="checkbox" value="Ninja Shooter"/>
                <span class="checkmark"></span>
            </label>
            <label class="container">Platform
                <input type="checkbox" value="Platform"/>
                <span class="checkmark"></span>
            </label>
        </div>
    </>
)
}

export default CategoriesSelector;