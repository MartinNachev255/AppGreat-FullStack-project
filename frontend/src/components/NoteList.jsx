import axios from "axios"
import { useEffect, useState } from "react"
import NoteItem from "./NoteItem"
import noteService from '../util'
import NewNoteForm from "./NewNoteForm"
import { Box } from "@mui/material"

const NoteList = () => {
    const [notes, setNotes] = useState([])
 
    useEffect(() => {
        fetch('http://localhost:5000/api/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    const deleteNote = (noteId) => {

        noteService.deleteNote(noteId)
        setNotes(notes.filter(note => note.id !== noteId))
    }

    const addNote = (newNoteText) => {
        const newNoteObject = {
        id: Math.floor(Math.random() * 1000),
        text: newNoteText
        }

        noteService.addNote(newNoteObject)
        setNotes(notes.concat(newNoteObject))
    }

    const updateNote = (noteId, updatedText) => {
        const updatedNoteObject = {
            id: noteId,
            text: updatedText
        }

        noteService.updateNote(noteId, updatedNoteObject)
        setNotes(notes.map(note => note.id === noteId ? updatedNoteObject : note))
    }

    return (
        <Box 
            sx={{ 
                width: '100%', 
                maxWidth: 360, 
                bgcolor: 'background.paper', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                margin: '0 auto'
            }}
        >
            <NewNoteForm addNote={addNote}/>
            {notes.map(note => 
                <NoteItem key={note.id} note={note} deleteNote={deleteNote} updateNote={updateNote}/>
            )}
        </Box>
    )
}

export default NoteList;