using AionysTask.Models;
using AionysTask.Persistentce;
using System;
using System.Threading.Tasks;

namespace AionysTask.Persistence
{
    public static class ApplicationDbContextSeed
    {
        public static async Task SeedSampleDataAsync(ApplicationDbContext context)
        {
            context.Notes.AddRange(
                new Note { Text = "Note number 1.", Date = DateTime.Now },
                new Note { Text = "Note number 2.", Date = DateTime.Now },
                new Note { Text = "Note number 3.", Date = DateTime.Now },
                new Note { Text = "Note number 4.", Date = DateTime.Now }
                );

            await context.SaveChangesAsync();
        }
    }
}
