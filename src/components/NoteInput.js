import React from 'react'
import '../styles/style.css';


class NoteInput extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(e) {
        this.setState(() => {
            return {
                title: e.target.value,
            }
        });
    }
    onBodyChangeEventHandler(e) {
        this.setState(() => {
            return {
                body: e.target.value,
            }
        });
    }

    onSubmitEventHandler(e) {
        e.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form className='note-input' onSubmit={ this.onSubmitEventHandler }>
                <h2>Buat Catatan</h2>
                <input className='note-input__title' type='text' placeholder='Judul catatan ...' value={ this.state.title } onChange={ this.onTitleChangeEventHandler } required />
                <textarea className='note-input__body' type='text' placeholder='Tambahkan Catatan di sini ...' value={ this.state.body } onChange={ this.onBodyChangeEventHandler } required></textarea>
                <button type='submit'>Buat Catatan</button>
            </form>
        )
    }
}
export default NoteInput;