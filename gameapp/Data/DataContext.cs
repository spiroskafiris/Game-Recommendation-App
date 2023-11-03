using gameapp.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using System.Net.Sockets;
using System.Reflection.Emit;
using System.Reflection.Metadata;

namespace gameapp.Data
{
    public class DataContext : DbContext
    {
        private string connectionString;
        public DataContext()
        {
            var configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
            connectionString = configuration.GetValue<string>("ConnectionStrings:DefaultConnectionString");
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(connectionString);
        }
    

        public DbSet<Game> Games { get; set; } //the Games database where all games are stored and fetched from
        public DbSet<User> Users { get; set; } //this is not used currently
        public DbSet<Favorite> Favorites { get; set; } //this may be used in another implementation

    }
}
