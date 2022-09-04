import React from 'react'

function NoteActionBody({ id, onDelete }) {
    return (
        <div className='note-item__action'>
            <button className='note-item__delete-button' onClick={ () => onDelete(id) }>Hapus</button>
            <button className='note-item__archive-button'>Arsipkan</button>
        </div>
    )
}

export default NoteActionBody;