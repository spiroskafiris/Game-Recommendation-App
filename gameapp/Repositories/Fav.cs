using gameapp.Data;
using gameapp.Models;

namespace gameapp.Repositories
{
    //this may be used in another implementation
    public class Fav : IFav
    {
        public bool AddtoFavorites(Favorite game)
        {
            using (var db = new DataContext())
            {
                db.Favorites.Add(game);
                db.SaveChanges();
                return true;
            }
            return false;
        }

        public IEnumerable<Favorite> GetAllFavorites()
        {
            using (var db = new DataContext())
            {
                return db.Favorites.ToList();
            }
            return null;
        }

        public bool DeleteFavorite(int id)
        {
            using (var db = new DataContext())
            {
                var target = db.Favorites.FirstOrDefault(c => c.Id == id);
                if (target != null)
                {
                    // Here in the other applications
                    // we do db.Remove(target) without the
                    // Customers. Why is that?
                    db.Favorites.Remove(target);
                    db.SaveChanges();
                    return true;
                }
                return false;
            }
        }
    }
}
