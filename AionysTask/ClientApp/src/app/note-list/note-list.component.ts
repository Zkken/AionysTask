import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  notes: Note[]
  newNote: Note = new Note()

  constructor(private noteService: NoteService) { 
    this.noteService.notes.subscribe(notes =>{ 
      this.notes = notes
    });
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.noteService.createNote(this.newNote);
    this.newNote = new Note(); 
  }

  onEdit(note: Note) {
    this.noteService.updateNote(note);
  }

  onDelete(id: number) {
    this.noteService.deleteNote(id);
  }
}
