using gameapp.Models;
using gameapp.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace gameapp.EndPoints
{
    public static class GameApi
    {
        public static void ConfigureGameApi(this WebApplication app)
        {
            app.MapPost("/games", CreateAGame);
            app.MapGet("/games/{id}", GetGame);
            app.MapGet("/games", GetAllGames);
            app.MapDelete("/games", DeleteGame);
            app.MapPut("/games", UpdateGame);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        private static async Task<IResult> CreateAGame(Game game, IGameRepo service)
        {
            try
            {
                if (service.AddGame(game)) return Results.Ok();
                return Results.NotFound();

            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        //get{id}
        [HttpGet]
        private static async Task<IResult> GetGame(int id, IGameRepo service)
        {
            try
            {
                return await Task.Run(() =>
                {
                    var game = service.GetGame(id);
                    if (game == null) return Results.NotFound();
                    return Results.Ok(game);
                });

            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }
        //get
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        private static async Task<IResult> GetAllGames(IGameRepo service)
        {
            try
            {
                return await Task.Run(() => {
                    return Results.Ok(service.GetAllGames());
                });
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        [HttpPut]
        [ProducesResponseType(StatusCodes.Status201Created)]
        private static async Task<IResult> UpdateGame(Game game, IGameRepo service)
        {
            try
            {
                return await Task.Run(() =>
                {
                    if (service.UpdateGame(game)) return Results.Ok();
                    return Results.NotFound();
                });
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        //delete
        [HttpDelete]
        [ProducesResponseType(StatusCodes.Status200OK)]
        private static async Task<IResult> DeleteGame(int id, IGameRepo service)
        {
            try
            {
                if (service.DeleteGame(id)) return Results.Ok();
                return Results.NotFound();

            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }
    }
}
