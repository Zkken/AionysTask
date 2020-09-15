import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCheck, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Note } from '../models/note';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note: Note
  @Output() onEdit = new EventEmitter<Note>()
  @Output() onDelete = new EventEmitter<number>()

  editNote: Note
  editMode = false
  faTimes = faTimes
  faEdit = faEdit
  faCheck = faCheck

  constructor() {
  }

  ngOnInit(): void {
   this.editNote = Object.assign({}, this.note);
  }

  delete() {
    this.onDelete.emit(this.note.id);
  }

  edit() {
    this.editMode = true;
  }

  save() {
    this.editMode = false;

    this.onEdit.emit(this.editNote);
  }
}
