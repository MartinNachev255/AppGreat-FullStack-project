import { notes } from "../../data.js";
import { CustomError } from "../util/CustomError.js";

const getNotes = () => {
    return notes;
}

const getNoteById = (noteId) => {
    const note = notes.find(note => note.id === noteId)

    if (!note) {
        throw new CustomError(`Note with ID:${noteId} not found`, 400)
    }

    return note
}

const addNote = (noteObject) => {
    notes.push(noteObject)
    return noteObject
}

const updateNote = (noteId, noteObject) => {
    if (!noteId) {
        throw new CustomError('Missing ID for note', 400);
    }

    if (!noteObject || !noteObject.text) {
        throw new CustomError('Text field is missing', 400);
    }

    const noteToUpdateIndex = notes.findIndex(note => note.id === noteId);

    if (noteToUpdateIndex === -1) {
        throw new CustomError(`Note with ID ${noteId} not found`, 404);
    }

    notes[noteToUpdateIndex].text = noteObject.text;

    return notes[noteToUpdateIndex];
}


const deleteNode = (noteId) => {
     if (!noteId) {
        throw new CustomError('Missing ID for note', 400);
    }

    const noteToDeleteIndex = notes.findIndex(note => note.id === noteId)

    if (noteToDeleteIndex === -1) {
        throw new CustomError(`Note with ID ${noteId} not found`, 404);
    }

    notes.splice(noteToDeleteIndex, 1)
}

export default { getNotes, getNoteById, addNote, updateNote, deleteNode }