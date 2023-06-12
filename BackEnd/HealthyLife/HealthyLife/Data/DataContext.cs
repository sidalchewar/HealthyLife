using HealthyLife.Models;
using Microsoft.EntityFrameworkCore;
namespace HealthyLife.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }   
        public DbSet<User> Users { get; set; }


    }
}
