import { useState } from "react";

const NoteItem = ({ note }) => {

    return (
        <div>
            <div style={{border: 'solid', margin: 10, width: 200, paddingLeft: 5}}>
                <p>ID: {note.id}</p>
                <p>Note: {note.text}</p>
            </div>
        </div>

    )
}

export default NoteItem;