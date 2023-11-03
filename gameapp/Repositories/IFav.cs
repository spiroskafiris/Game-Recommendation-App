using gameapp.Models;
using System.Runtime.CompilerServices;

namespace gameapp.Repositories
{
    public interface IFav
    {
        //this may be used in another implementation
        bool AddtoFavorites(Favorite game);
        IEnumerable<Favorite> GetAllFavorites();
        bool DeleteFavorite(int id);
    }
}
