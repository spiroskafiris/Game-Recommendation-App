namespace gameapp.Models
{
    public class User
    {
        //this may be used in another implementation
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Favorites { get; set; } // this would be a list of games in another implementation
    }
}
