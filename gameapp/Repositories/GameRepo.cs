using gameapp.Data;
using gameapp.Models;

namespace gameapp.Repositories
{
    public class GameRepo : IGameRepo
    {
        public bool AddGame(Game game)
        {
            using (var db = new DataContext())
            {
                db.Games.Add(game);
                db.SaveChanges();
                return true;
            }
            return false;
        }

        public bool AddGameToSelected(Game game)
        {
            using (var db = new DataContext())
            {
                db.SelectedGames.Add(game);
                db.SaveChanges();
                return true;
            }
            return false;
        }

        public bool DeleteGame(int id)
        {
            using (var db = new DataContext())
            {
                var target = db.Games.FirstOrDefault(c => c.Id == id);
                if (target != null)
                {
                    // Here in the other applications
                    // we do db.Remove(target) without the
                    // Customers. Why is that?
                    db.Games.Remove(target);
                    db.SaveChanges();
                    return true;
                }
                return false;
            }
        }

        public Game GetGame(int id)
        {
            Game result;
            using (var db = new DataContext())
            {
                result = db.Games.FirstOrDefault(c => c.Id == id);
            };
            return result;
        }

        public IEnumerable<Game> GetAllGames()
        {
            using (var db = new DataContext())
            {
                return db.Games.ToList();
            }
            return null;
        }
        
    }
}
