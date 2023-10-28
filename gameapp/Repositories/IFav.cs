using gameapp.Models;

namespace gameapp.Repositories
{
    public interface IFav
    {
        bool AddtoFavorites(Favorite game);
        IEnumerable<Favorite> GetAllFavorites();
        bool DeleteFavorite(int id);
    }
}
