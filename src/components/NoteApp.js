import React from 'react'
import NoteList from './NoteList';
import { getInitialData } from '../utils';
import NoteInput from './NoteInput';
import NoteHeader from './NoteHeader';

class NoteApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }
    
    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date(),
                        archived: false,
                    }
                ]
            }
        });
    }

    render() {
        const { notes } = this.state;
        const activeNotes = notes;
        return (
            <div className='note-app'>
                <NoteHeader />
                <div className='note-app__body'>
                    <NoteInput addNote={ this.onAddNoteHandler } />
                    <h2>Catatan Aktif</h2>
                    { activeNotes.length !== 0 ? (
                        <NoteList notes={ this.state.notes } onDelete={ this.onDeleteHandler }
                        />
                    ) : (
                        <p className='notes-list__empty-message'>Tidak ada data</p>
                    )
                    }
                    <h2>Arsip Catatan</h2>
                </div>
            </div>
        )
    }
}

export default NoteApp;