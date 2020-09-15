using AionysTask.Infrastructure.Interfaces;
using AionysTask.Models;
using Microsoft.EntityFrameworkCore;

namespace AionysTask.Persistentce
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Note> Notes { get; set; }
    }
}
