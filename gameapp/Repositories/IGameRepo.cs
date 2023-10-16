using gameapp.Models;

namespace gameapp.Repositories
{
    public interface IGameRepo
    {
        bool AddGame(Game game);
        Game GetGame(int id);
        IEnumerable<Game> GetAllGames();
        bool UpdateGame(Game game);
        bool DeleteGame(int id);
    }
}
