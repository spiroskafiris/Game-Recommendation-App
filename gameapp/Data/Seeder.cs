using gameapp.Models;
using System.Security.Policy;

namespace gameapp.Data
{
    public static class Seeder
    {
        public static void Seed(this WebApplication app)
        {
            using (var db = new DataContext())
            {

                var games = new List<Game>();
                var selected = new List<Game>();

                if (!db.Games.Any())
                {
                    Game game1 = new Game()
                    {
                        Title = "Fifa",
                        Developer = "EA",
                        Genres = "Soccer",
                        Rating = 7,
                        Description = "Soccer for dreamers who couldn't make their dream come true"
                    };
                    games.Add(game1);
                    Game game2 = new Game()
                    {
                        Title = "COD",
                        Developer = "EA",
                        Genres = "FPS",
                        Rating = 9,
                        Description = "COD for ruining friendships"
                    };
                    games.Add(game2);
                    Game game3 = new Game()
                    {
                        Title = "Leage of Legends",
                        Developer = "Blizzard",
                        Genres = "MMORPG",
                        Rating = 3,
                        Description = "For those who have spare money for a new keyboard"
                    };
                    games.Add(game3);

                    db.Games.AddRange(games);
                }


                /*if (!db.SelectedGames.Any())
                {

                    Game game1 = new Game()
                    {
                        Title = "Fifa",
                        Developer = "EA",
                        Genres = "Soccer",
                        Rating = 7,
                        Description = "Soccer for dreamers who couldn't make their dream come true"
                    };
                    games.Add(game1);
                    Game game2 = new Game()
                    {
                        Title = "COD",
                        Developer = "EA",
                        Genres = "FPS",
                        Rating = 9,
                        Description = "COD for ruining friendships"
                    };
                    games.Add(game2);
                    Game game3 = new Game()
                    {
                        Title = "Leage of Legends",
                        Developer = "Blizzard",
                        Genres = "MMORPG",
                        Rating = 3,
                        Description = "For those who have spare money for a new keyboard"
                    };
                    games.Add(game3);

                    db.Games.AddRange(games);
                }*/

                db.SaveChanges();
            }
        }
    }
}
