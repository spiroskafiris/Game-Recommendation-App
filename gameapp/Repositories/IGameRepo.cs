using gameapp.Models;

namespace gameapp.Repositories
{
    public interface IGameRepo
    {
        bool AddGame(Game game);
        bool AddGameToSelected(Game game);
        Game GetGame(int id);
        IEnumerable<Game> GetAllGames();
        bool UpdateGame(Game game); // this I may won't need
        bool DeleteGame(int id);
    }
}
