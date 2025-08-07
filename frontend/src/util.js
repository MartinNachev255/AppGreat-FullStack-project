import axios from "axios"
const baseUrl = 'http://localhost:5000/api/notes'

const deleteNote = async (noteId) => {
    await axios.delete(`${baseUrl}/${noteId}`)
}

const addNote = async (newNoteObject) => {
    await axios.post(baseUrl, newNoteObject)
}

const updateNote = async (noteId, noteObject) => {
    await axios.put(`${baseUrl}/${noteId}`, noteObject)
}

export default { addNote, updateNote, deleteNote }