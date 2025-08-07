import express from 'express'
import noteServices from '../services/notes.js';

const notesRouter = express.Router();

notesRouter.get('/', (req, res, next) => {
    try {
        const notes = noteServices.getNotes()
        res.status(200).json(notes)
    }
    catch (error) {
        next(error)
    }
})

notesRouter.get('/:id', (req, res, next) => {
    try {
        const noteId = Number(req.params.id)
        const note = noteServices.getNoteById(noteId)
        res.status(200).json(note)
    }
    catch (error) {
        next(error)
    }
})

notesRouter.post('/', (req, res, next) => {
    try {
        const body = req.body;
        const result = noteServices.addNote(body);
        res.status(200).json(result);
    }
    catch (error) {
        next(error);
    }
})

notesRouter.put('/:id', (req, res, next) => {
    try {
        const noteId = Number(req.params.id);
        const body = req.body;
        const result = noteServices.updateNote(noteId, body)
        res.status(200).json(result)
    }
    catch (error) {
            next(error)
    }
})

notesRouter.delete('/:id', (req, res, next) => {
    try {
        const noteId = Number(req.params.id)
        noteServices.deleteNode(noteId)
        res.status(204)
    }
    catch (error) {
        next(error)
    }
})

export default notesRouter;