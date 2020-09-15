import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[]
  newNote: Note = new Note()

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes() {
    this.noteService.getNotes().subscribe(result => {
      this.notes = result;
    })
  }

  onAdd() {
    this.noteService.createNote(this.newNote).subscribe(result => {
      this.newNote.id = result;
      console.log(result);
      this.notes.push(this.newNote);
      this.newNote = new Note(); 
    })
  }

  onEdit(note: Note) {
    this.noteService.updateNote(note).subscribe(result => {
      let noteEdit = this.notes.find(n => n.id == note.id);
      noteEdit.text = note.text;
    })
  }

  onDelete(id: number) {
    this.noteService.deleteNote(id).subscribe(result => {
      let index = this.notes.findIndex(n => n.id == id);
      this.notes.splice(index, 1);
    })
  }
}
