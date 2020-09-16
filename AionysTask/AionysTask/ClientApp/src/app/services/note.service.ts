import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private subject = new BehaviorSubject<Note[]>([]);

  public notes: Observable<Note[]> = this.subject.asObservable();

  constructor(
    @Inject('BASE_URL') private baseUrl: string, 
    private client: HttpClient
  ) {
    this.loadNotes();
  }

  private loadNotes() {
    this.client.get<Note[]>(this.baseUrl + 'notes').pipe(
      tap(notes => this.subject.next(notes))
    )
    .subscribe();
  }

  public deleteNote(id: number): void {
    let index = this.subject.value.findIndex(n => n.id === id);
    this.subject.value.splice(index, 1);

    this.client.delete(this.baseUrl + 'notes/' + id).subscribe();
  }

  public createNote(note: Note): void {
    this.client.post<number>(this.baseUrl + 'notes', note).subscribe(result => {
      note.id = result;
      this.subject.value.push(note);
    });
  }

  public getNote(id: number): Note {
    return this.subject.value.find(n => n.id === id);
  }


  public updateNote(note: Note) {
    let findNote = this.subject.value.find(n => n.id === note.id);
    if(findNote.text === note.text) {
      return;
    }
    findNote.text = note.text;
    
    this.client.put(this.baseUrl + 'notes/' + note.id, note).subscribe();
  }
}
