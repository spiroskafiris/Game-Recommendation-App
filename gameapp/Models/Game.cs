using System.ComponentModel.DataAnnotations.Schema;

namespace gameapp.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Img { get; set; }
        public string Developer { get; set; }
        public List<string> Genres { get; set; }
        public int Rating { get; set; }
        public string Description { get; set; }
        public bool isFavorite { get; set; } //this is used for the Favorites tab, when true its shown in favorites when its false it isn't
    }
}
