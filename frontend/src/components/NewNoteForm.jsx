import { useState } from "react"
import { TextField, Button, Box, Alert } from "@mui/material";

const NewNoteForm = ({ addNote }) => {
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (input.trim().length < 3) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
            return
        }
        addNote(input)
        setInput('')
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300, margin: '0 auto' }}>
            {error && (
                <Alert severity="error" sx={{ mb: 1, textAlign: 'center' }}>
                    Note must be at least 3 characters long.
                </Alert>
            )}
            <TextField
                label="Add new note"
                variant="outlined"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                fullWidth
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Add Note
            </Button>
        </Box>
    )
}

export default NewNoteForm;