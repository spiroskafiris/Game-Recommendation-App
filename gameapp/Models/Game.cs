namespace gameapp.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Developer { get; set; }
        public string Genres { get; set; } // this will be a list of genres
        public int Rating { get; set; }
        public string Description { get; set; }
    }
}
