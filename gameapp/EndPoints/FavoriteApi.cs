using gameapp.Models;
using gameapp.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace gameapp.EndPoints
{
    //this may be used in another implementation
    public static class FavoriteApi
    {
        public static void ConfigureFavoriteApi(this WebApplication app)
        {
            app.MapPost("/favorites", AddtoFavorites);
            app.MapGet("/favorites", GetAllFavorites);
            app.MapDelete("/favorites", RemoveFromFavorites);
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        private static async Task<IResult> AddtoFavorites(Favorite game, IFav service)
        {
            try
            {
                if (service.AddtoFavorites(game)) return Results.Ok();
                return Results.NotFound();

            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }

        //get
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        private static async Task<IResult> GetAllFavorites(IFav service)
        {
            try
            {
                return await Task.Run(() => {
                    return Results.Ok(service.GetAllFavorites());
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
        private static async Task<IResult> RemoveFromFavorites(int id, IFav service)
        {
            try
            {
                if (service.DeleteFavorite(id)) return Results.Ok();
                return Results.NotFound();

            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message);
            }
        }
    }
}
