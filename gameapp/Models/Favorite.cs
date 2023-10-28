﻿namespace gameapp.Models
{
    public class Favorite: Game
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Img { get; set; }
        public string Developer { get; set; }

        public List<string> Genres { get; set; }
        public int Rating { get; set; }
        public string Description { get; set; }
    }
}
