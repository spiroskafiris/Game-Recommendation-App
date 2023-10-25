using gameapp.Models;

namespace gameapp.Repositories
{
    public interface IGameRepo
    {
        bool AddGame(Game game);
        bool AddGameToSelected(Game game);
        Game GetGame(int id);
        IEnumerable<Game> GetAllGames();
        bool DeleteGame(int id);
    }
}
