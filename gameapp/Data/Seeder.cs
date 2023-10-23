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
                        Img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXfWhRGbNG7ehxRBMiyDU5gHvMM3DssXaIjOr5KocdSuLo1UEO7QkIk7BtN0-l29x8Mc&usqp=CAU",
                        Developer = "EA",
                        Genres = "Soccer",
                        Rating = 7,
                        Description = "Soccer for dreamers who couldn't make their dream come true"
                    };
                    games.Add(game1);
                    Game game2 = new Game()
                    {
                        Title = "Call of Duty",
                        Img = "https://images.immediate.co.uk/production/volatile/sites/3/2021/04/Call-of-Duty.jpg-d196774.png?quality=90&webp=true&resize=620,414",
                        Developer = "EA",
                        Genres = "FPS",
                        Rating = 9,
                        Description = "COD for ruining friendships"
                    };
                    games.Add(game2);
                    Game game3 = new Game()
                    {
                        Title = "League of Legends",
                        Img = "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt02dd32b665c25036/5f4defe8b553152466d1b21a/Homepage_World_1.jpg",
                        Developer = "Blizzard",
                        Genres = "MMORPG",
                        Rating = 3,
                        Description = "For those who have spare money for a new keyboard"
                    };
                    games.Add(game3);
                    Game game4 = new Game()
                    {
                        Title = "Rocket League",
                        Img = "https://rocketleague.media.zestyio.com/rl_home_f2p-launch_cross_10656.jpg?width=1920&fit=bounds",
                        Developer = "Psyonix",
                        Genres = "Car Soccer",
                        Rating = 6,
                        Description = "Strike a goal with your car."
                    };
                    games.Add(game4);
                    Game game5 = new Game()
                    {
                        Title = "Tekken 5",
                        Img = "https://w0.peakpx.com/wallpaper/513/74/HD-wallpaper-tekken-5-dark-resurrection-fighting-tekken-5-video-game-game-kazama-dark-resurrection-mishima-gaming-tekken.jpg",
                        Developer = "Namco",
                        Genres = "Fighting",
                        Rating = 6,
                        Description = "Be a fighter!"
                    };
                    games.Add(game5);
                    Game game6 = new Game()
                    {
                        Title = "Warframe",
                        Img = "https://n9e5v4d8.ssl.hwcdn.net/images/longlanding/warframe-metacard.png",
                        Developer = "D.E.",
                        Genres = "Ninja Shooter",
                        Rating = 10,
                        Description = "Ninjas play for free!"
                    };
                    games.Add(game6);
                    Game game7 = new Game()
                    {
                        Title = "INSIDE",
                        Img = "https://cdn.akamai.steamstatic.com/steam/apps/304430/capsule_616x353.jpg?t=1684943720",
                        Developer = "Playdead",
                        Genres = "Platform",
                        Rating = 9,
                        Description = "Small."
                    };
                    games.Add(game7);
                    Game game8 = new Game()
                    {
                        Title = "Age of Empires",
                        Img = "https://store-images.s-microsoft.com/image/apps.52655.13995133334716212.b722fa7a-fc67-4aa0-b7e7-36191c9dd5db.7b81dd03-acfe-41e6-924d-cdab919ed6cf?q=90&w=480&h=270",
                        Developer = "Relic Ent.",
                        Genres = "Strategy",
                        Rating = 10,
                        Description = "Divide and Conquer!"
                    };
                    games.Add(game8);
                    Game game9 = new Game()
                    {
                        Title = "Elden Ring",
                        Img = "https://i.ytimg.com/vi/JldMvQMO_5U/maxresdefault.jpg",
                        Developer = "FromSoftware",
                        Genres = "Soulslike",
                        Rating = 10,
                        Description = "Good luck."
                    };
                    games.Add(game9);
                    Game game10 = new Game()
                    {
                        Title = "Sekiro",
                        Img = "https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg",
                        Developer = "FromSoftware",
                        Genres = "Soulslike",
                        Rating = 11,
                        Description = "Good luck again.."
                    };
                    games.Add(game10);

                    db.Games.AddRange(games);
                }

                db.SaveChanges();
            }
        }
    }
}
