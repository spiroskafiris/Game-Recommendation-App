   
function NewLogin() {
    return(
    <section>
        <div className="image">
            <img src="https://images.squarespace-cdn.com/content/v1/55bebb51e4b036c52ebe8c45/1581577517874-3VCIKUSNL9ZZ1K30DCF1/home+office+game+room" alt="background image"></img>
        </div>

        <div className="content">
            <div className="form">
                <h3>Login</h3>
                <form action="#">
                    <div class="input">
                        <span>Username</span>
                        <input type="text" name="username" required></input>
                    </div>
                    <div class="input">
                        <span>Password</span>
                        <input type="password" name="password" required></input>
                    </div>
                    <div class="input">
                        <input type="submit" value="Submit" id="submit-button"></input>
                    </div>

                    <div class="input">
                        <p>Don't have an account? <a href="#">Sign up</a></p>
                    </div>
                    <div class="input">
                        <button id="google-login-btn" class="google-button"><i class="fab fa-google"></i>Login with Google</button>
                    </div>


                </form>


                <h3>Login with Social media</h3>
                <ul class="social-media">
                    <li><img src="https://static.vecteezy.com/system/resources/previews/017/743/718/original/instagram-icon-logo-free-png.png"></img></li>
                    <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"></img></li>
                    <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/640px-WhatsApp_icon.png"></img></li>
                </ul>
            </div>
        </div>




    </section>


)}

export default NewLogin;