using AionysTask.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AionysTask.Infrastructure.Interfaces
{
    public interface INoteRepository
    {
        Task<IEnumerable<Note>> GetNotesAsync();
        Task<Note> GetNoteByIdAsync(int id);
        Task<int> CreateNoteAsync(Note note);
        Task UpdateNoteAsync(Note note);
        Task DeleteNoteAsync(Note note);
    }
}
