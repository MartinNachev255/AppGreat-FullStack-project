import { useEffect, useState } from "react"
import NoteItem from "./NoteItem"
import NewNoteForm from "./NewNoteForm"

const NoteList = () => {
    const [notes, setNotes] = useState([])
 
    useEffect(() => {
        fetch('http://localhost:5000/api/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    return (
        <div>
            <NewNoteForm addNote={addNote}/>
            {notes.map(note => 
                <NoteItem key={note.id} note={note}/>
            )}
        </div>
    )
}

export default NoteList;