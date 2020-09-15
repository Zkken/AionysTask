import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(@Inject('BASE_URL') private baseUrl: string, private client: HttpClient) {

  }

  public getNotes() {
    return this.client.get<Note[]>(this.baseUrl + 'notes');
  }

  public getNote(id: number) {
    return this.client.get<Note>(this.baseUrl + 'notes/' + id);
  }

  public deleteNote(id: number) {
    return this.client.delete(this.baseUrl + 'notes/' + id);
  }

  public updateNote(note: Note) {
    return this.client.put(this.baseUrl + 'notes/' + note.id, note);
  }

  public createNote(note: Note) {
    return this.client.post<number>(this.baseUrl + 'notes', note);
  }
}
