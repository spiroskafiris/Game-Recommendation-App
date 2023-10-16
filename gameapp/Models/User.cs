namespace gameapp.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        // public string Email { get; set; }
        public string Favorites { get; set; } // this will be a list of games

        // Favorites may consist of the two below
        //public string fav_games { get; set; }
        //public string fav_genres { get; set; }
    }
}
