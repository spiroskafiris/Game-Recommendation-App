using gameapp.Models;

namespace gameapp.Repositories
{
    public interface IGameRepo
    {
        bool AddGame(Game game);
        Game GetGame(int id);
        IEnumerable<Game> GetAllGames();
        bool DeleteGame(int id);
        //Favorites methods
        /*bool AddtoFavorites(Favorite game);
        IEnumerable<Favorite> GetAllFavorites();
        bool DeleteFavorite(int id);*/

    }
}
