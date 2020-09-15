import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Note } from '../models/note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  @Input() edit: boolean
  @Input() note: Note
  @Output() onAdd = new EventEmitter();

  noteForm = this.formBuilder.group({
    noteTextControl: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(500)]]
  });

  constructor(private formBuilder: FormBuilder) { }

  get noteText() {
    return this.noteForm.get('noteTextControl');
  }

  ngOnInit(): void {
    this.noteText.setValue(this.note.text);
  }

  add() {
    this.note.text = this.noteText.value;
    this.note.date = new Date();
    this.noteText.reset();
    this.onAdd.emit();
  }

  noteChangeText() {
    this.note.text = this.noteText.value;
  }

  hasError() {
    let e = this.noteText;
    return e && (e.dirty || e.touched) && e.invalid;
  }
}
