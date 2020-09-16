import { browser, element, by, Key } from 'protractor';

export class NoteListPage {
  navigateTo() {
    return browser.get('/');
  }

  getNoteFormInputElement() {
      return element(by.css('textarea'));
  }

  getNoteItems() {
      return element.all(by.css('.card'));
  }

  getAddNewNoteButton() {
    return element(by.css('.btn-success'));
  }

  getHeader() {
    return element(by.css('.text-center'));
  }
}