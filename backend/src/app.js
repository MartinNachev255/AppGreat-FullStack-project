import express from 'express'
import cors from 'cors';
import notesRouter from './controllers/notes.js';
import globalErrorHandler from './middleware/globalErrorHandler.js'

const app = express()

app.use(express.json())

app.use(cors())

app.use('/api/notes', notesRouter)

app.use(globalErrorHandler)

export default app;