using System.Collections.Generic;
using System.Threading.Tasks;
using AionysTask.Infrastructure.Interfaces;
using AionysTask.Models;
using Microsoft.AspNetCore.Mvc;

namespace AionysTask.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly INoteRepository _noteRepository;

        public NotesController(INoteRepository noteRepository)
        {
            _noteRepository = noteRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Note>>> GetAll()
        {
            return Ok(await _noteRepository.GetNotesAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Note>> GetById(int id)
        {
            return Ok(await _noteRepository.GetNoteByIdAsync(id));
        }

        [HttpPost]
        public async Task<ActionResult<int>> Create(Note note)
        {
            return await _noteRepository.CreateNoteAsync(note);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var note = await _noteRepository.GetNoteByIdAsync(id);

            if(note == null)
            {
                return NotFound();
            }

            await _noteRepository.DeleteNoteAsync(note);

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Note note)
        {
            if(id != note.Id)
            {
                return BadRequest();
            }

            await _noteRepository.UpdateNoteAsync(note);

            return Ok();
        }
    }
}
