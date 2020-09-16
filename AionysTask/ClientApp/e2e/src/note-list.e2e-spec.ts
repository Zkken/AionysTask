import { NoteListPage } from "./note-list.po"

describe('AionysTask note-list view', function() {
    let page: NoteListPage

    beforeEach(() => {
        page = new NoteListPage();
    })

    it('add new note input should be reset after adding', () => {
        page.navigateTo()
        page.getNoteFormInputElement().sendKeys('test123')
        page.getAddNewNoteButton().click()
        expect(page.getNoteFormInputElement().getText()).toBe('')
    })
})