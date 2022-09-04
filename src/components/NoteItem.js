import React from 'react'
import NoteItemBody from './NoteItemBody'
import NoteActionBody from './NoteActionBody';


function NoteItem ({title, createdAt, body, id, onDelete}) {
    return(
        <div className='note-item'>
            <NoteItemBody title={ title } createdAt={createdAt} body={body} />
            <NoteActionBody id={ id } onDelete={ onDelete} />
        </div>
    )
}

export default NoteItem;