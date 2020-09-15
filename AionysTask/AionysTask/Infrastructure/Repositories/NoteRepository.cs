using AionysTask.Infrastructure.Interfaces;
using AionysTask.Models;
using AionysTask.Persistentce;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AionysTask.Infrastructure.Repositories
{
    public class NoteRepository : INoteRepository
    {
        private readonly ApplicationDbContext _context;

        public NoteRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> CreateNoteAsync(Note note)
        {
            var newNote = new Note
            {
                Text = note.Text,
                Date = DateTime.Now
            };

            _context.Notes.Add(newNote);

            await _context.SaveChangesAsync();

            return note.Id;
        }

        public async Task DeleteNoteAsync(Note note)
        {
            _context.Notes.Remove(note);

            await _context.SaveChangesAsync();
        }

        public async Task<Note> GetNoteByIdAsync(int id)
        {
            return await _context.Notes.FindAsync(id);
        }

        public async Task<IEnumerable<Note>> GetNotesAsync()
        {
            return await _context.Notes.ToListAsync();
        }

        public async Task UpdateNoteAsync(Note note)
        {

            _context.Entry(note).State = EntityState.Modified;

            await _context.SaveChangesAsync();
        }
    }
}
