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
                        Genres = new List<string> { "Soccer ,", "Co-op ,", "Online " },
                        Rating = 7,
                        Description = "Soccer for dreamers who couldn't make their dream come true"
                    };
                    games.Add(game1);
                    Game game2 = new Game()
                    {
                        Title = "Call of Duty",
                        Img = "https://images.immediate.co.uk/production/volatile/sites/3/2021/04/Call-of-Duty.jpg-d196774.png?quality=90&webp=true&resize=620,414",
                        Developer = "EA",
                        Genres = new List<string> { "FPS ,", "Co-op ,", "Online ,", "Action ," },
                        Rating = 9,
                        Description = "COD for ruining friendships"
                    };
                    games.Add(game2);
                    Game game3 = new Game()
                    {
                        Title = "League of Legends",
                        Img = "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt02dd32b665c25036/5f4defe8b553152466d1b21a/Homepage_World_1.jpg",
                        Developer = "Riot Games",
                        Genres = new List<string> { "MMORPG ,", "Online ,", "Action ," },
                        Rating = 3,
                        Description = "For those who have spare money for a new keyboard"
                    };
                    games.Add(game3);
                    Game game4 = new Game()
                    {
                        Title = "Rocket League",
                        Img = "https://rocketleague.media.zestyio.com/rl_home_f2p-launch_cross_10656.jpg?width=1920&fit=bounds",
                        Developer = "Psyonix",
                        Genres = new List<string> { "Soccer ,", "Cars ,", "Online ,", "Action ," },
                        Rating = 6,
                        Description = "Strike a goal with your car."
                    };
                    games.Add(game4);
                    Game game5 = new Game()
                    {
                        Title = "Tekken 5",
                        Img = "https://w0.peakpx.com/wallpaper/513/74/HD-wallpaper-tekken-5-dark-resurrection-fighting-tekken-5-video-game-game-kazama-dark-resurrection-mishima-gaming-tekken.jpg",
                        Developer = "Namco",
                        Genres = new List<string> { "Fighting ,", "Action ,", "Co-op ," },
                        Rating = 6,
                        Description = "Be a fighter!"
                    };
                    games.Add(game5);
                    Game game6 = new Game()
                    {
                        Title = "Warframe",
                        Img = "https://n9e5v4d8.ssl.hwcdn.net/images/longlanding/warframe-metacard.png",
                        Developer = "D.E.",
                        Genres = new List<string> { "Ninja Shooter ,", "Action ,", "Online ,", "Co-op ," },
                        Rating = 10,
                        Description = "Ninjas play for free!"
                    };
                    games.Add(game6);
                    Game game7 = new Game()
                    {
                        Title = "INSIDE",
                        Img = "https://cdn.akamai.steamstatic.com/steam/apps/304430/capsule_616x353.jpg?t=1684943720",
                        Developer = "Playdead",
                        Genres = new List<string> { "Atmospheric ," },
                        Rating = 9,
                        Description = "Small."
                    };
                    games.Add(game7);
                    Game game8 = new Game()
                    {
                        Title = "Age of Empires",
                        Img = "https://store-images.s-microsoft.com/image/apps.52655.13995133334716212.b722fa7a-fc67-4aa0-b7e7-36191c9dd5db.7b81dd03-acfe-41e6-924d-cdab919ed6cf?q=90&w=480&h=270",
                        Developer = "Relic Ent.",
                        Genres = new List<string> { "Strategy ,", "Action ," },
                        Rating = 10,
                        Description = "Divide and Conquer!"
                    };
                    games.Add(game8);
                    Game game9 = new Game()
                    {
                        Title = "Elden Ring",
                        Img = "https://i.ytimg.com/vi/JldMvQMO_5U/maxresdefault.jpg",
                        Developer = "FromSoftware",
                        Genres = new List<string> { "Soulslike ,", "Action ," },
                        Rating = 10,
                        Description = "Good luck."
                    };
                    games.Add(game9);
                    Game game10 = new Game()
                    {
                        Title = "Sekiro",
                        Img = "https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg",
                        Developer = "FromSoftware",
                        Genres = new List<string> { "Soulslike ,", "Action ," },
                        Rating = 11,
                        Description = "Good luck again.."
                    };
                    games.Add(game10);
                    Game game11 = new Game()
                    {
                        Title = "Grand Theft Auto",
                        Img = "https://www.bleepstatic.com/content/hl-images/2022/09/18/GTA.jpg",
                        Developer = "Rockstar Games",
                        Genres = new List<string> { "Online ,", "Action ,", "Co-op ," },
                        Rating = 8,
                        Description = "The train CJ!"
                    };
                    games.Add(game11);
                    Game game12 = new Game()
                    {
                        Title = "Minecraft",
                        Img = "https://www.minecraft.net/content/dam/games/minecraft/key-art/SUPM_Game-Image_One-Vanilla_672x400.jpg",
                        Developer = " Mojang",
                        Genres = new List<string> { "Action ,", "Atmospheric ,", "Survival ," },
                        Rating = 8,
                        Description = "Build Blocks"
                    };
                    games.Add(game12);
                    Game game13 = new Game()
                    {
                        Title = "Need for Speed:Most Wanted",
                        Img = "https://gepig.com/game_cover_460w/297.jpg",
                        Developer = "E.A",
                        Genres = new List<string> { "Racing ,", "Action ,", "Cars ," },
                        Rating = 10,
                        Description = "Best car game in history"
                    };
                    games.Add(game13);
                    Game game14 = new Game()
                    {
                        Title = "The Forest",
                        Img = "https://phenixxgaming.com/wp-content/uploads/2021/01/content-21.jpg",
                        Developer = "Endnight Games",
                        Genres = new List<string> { "Survival ,", "Action ,", "Co-op ," },
                        Rating = 9,
                        Description = "Survive the Forest.."
                    };
                    games.Add(game14);
                    Game game15 = new Game()
                    {
                        Title = "Among Us",
                        Img = "https://cdn1.idcgames.com/storage/image/1333/thumb_slider/default.jpg",
                        Developer = " Marcus Bromanther",
                        Genres = new List<string> { "Online ,", "Co-op ,", "Atmospheric ," },
                        Rating = 7,
                        Description = "There is an impostor Among Us..."
                    };
                    games.Add(game15);
                    Game game16 = new Game()
                    {
                        Title = "The Witcher",
                        Img = "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/capsule_616x353.jpg?t=1693590732",
                        Developer = "CD Projekt RED",
                        Genres = new List<string> { "Action ," },
                        Rating = 10,
                        Description = "The hunt is on."
                    };
                    games.Add(game16);
                    Game game17 = new Game()
                    {
                        Title = "The Amazing Spider Man",
                        Img = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9F7626F40F04BD3384BA580BD66527E8DE1C5B6406D9121E93D2C72710EFE18B/scale?width=1200&aspectRatio=1.78&format=jpeg",
                        Developer = "Gameloft",
                        Genres = new List<string> { "Action ," },
                        Rating = 6,
                        Description = "Your friendly neighborhood Spider-Man"
                    };
                    games.Add(game17);
                    Game game18 = new Game()
                    {
                        Title = "Cyberpunk",
                        Img = "https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg",
                        Developer = " CD Projekt RED",
                        Genres = new List<string> { "Action ,", "Atmospheric ," },
                        Rating = 11,
                        Description = "There is an impostor Among Us..."
                    };
                    games.Add(game18);
                    Game game19 = new Game()
                    {
                        Title = "Overwatch",
                        Img = "https://cdn.akamai.steamstatic.com/steam/apps/2357570/header.jpg?t=1697050825",
                        Developer = " Blizzard",
                        Genres = new List<string> { "Co-op ,", "Online ,", "Action ,", "FPS ," },
                        Rating = 7,
                        Description = "Team up and Fight!"
                    };
                    games.Add(game19);
                    Game game20 = new Game()
                    {
                        Title = "Assasin's Creed",
                        Img = "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/9/16/qsavzzs1hulerklkkzzp/ac-header",
                        Developer = "Ubisoft",
                        Genres = new List<string> { "Action ," },
                        Rating = 6,
                        Description = "I am but a blade in a crowd"
                    };
                    games.Add(game20);
                    Game game21 = new Game()
                    {
                        Title = "WWE",
                        Img = "https://www.wwe.com/f/styles/gallery_img_ml/public/all/2019/05/20130514_WWEUniverse--f2404e2ffde79a2aa7308bf3b4962978.jpg",
                        Developer = "Yuke's",
                        Genres = new List<string> { "Co-op ,", "Fighting ," },
                        Rating = 6,
                        Description = "You can' see me, my time is now!"
                    };
                    games.Add(game21);
                    Game game22 = new Game()
                    {
                        Title = "PUBG",
                        Img = "https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg",
                        Developer = "Tencent Games",
                        Genres = new List<string> { "Action ,", "Co-op ,", "Online ," },
                        Rating = 8,
                        Description = "WINNER WINNER CHICKEN DINNER!"
                    };
                    games.Add(game22);
                    Game game23 = new Game()
                    {
                        Title = "Valorant",
                        Img = "https://cdn.vox-cdn.com/thumbor/eNOhiVdnvnyYEv_9kIw1IABEyZI=/0x0:3011x1447/1400x933/filters:focal(1123x329:1603x809):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66954486/VALORANT_Jett_Red_crop.0.jpg",
                        Developer = "Riot Games",
                        Genres = new List<string> { "Action ,", "Co-op ,", "Online ,", "FPS ," },
                        Rating = 6,
                        Description = "Clutch"
                    };
                    games.Add(game23);
                    Game game24 = new Game()
                    {
                        Title = "Counter Strike 1.6",
                        Img = "https://www.bosshunting.com.au/wp-content/uploads/2020/06/Untitled-1-1.jpg",
                        Developer = "Valve",
                        Genres = new List<string> { "Action ,", "Co-op ,", "Online ,", "FPS ," },
                        Rating = 7,
                        Description = "The Classic"
                    };
                    games.Add(game24);
                    Game game25 = new Game()
                    {
                        Title = "Halo 4",
                        Img = "https://oyster.ignimgs.com/mediawiki/apis.ign.com/halo-4/8/83/Halo_4_art_top.jpg",
                        Developer = "343 Industries",
                        Genres = new List<string> { "Action ,", "Atmospheric ,", "Online ,", "FPS ," },
                        Rating = 10,
                        Description = "Master Chief reporting for Duty."
                    };
                    games.Add(game25);

                    db.Games.AddRange(games);
                }

                db.SaveChanges();
            }
        }
    }
}
