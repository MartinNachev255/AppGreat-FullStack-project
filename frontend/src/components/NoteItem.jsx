import { useState } from "react";
import { Card, CardContent, Typography, Button, TextField, Box, Alert } from "@mui/material";

const NoteItem = ({ note, deleteNote, updateNote }) => {
    const [showUpdateField, setShowUpdateField] = useState(false)
    const [updateField, setUpdateField] = useState('')
    const [showError, setShowError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (updateField.length < 3) {
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 3000)
            return;
        }
        updateNote(note.id, updateField)
        setUpdateField('')
        setShowUpdateField(false)
    }

    return (
        <Card sx={{ maxWidth: 600, m: 2, p: 1, width: '100%' }}>
            <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                    ID: {note.id}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Note: {note.text}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => deleteNote(note.id)}
                        size="small"
                    >
                        Delete
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => setShowUpdateField(!showUpdateField)}
                        size="small"
                    >
                        Update
                    </Button>
                </Box>
                {showUpdateField && (
                    <Box>
                        {showError && (
                            <Alert severity="error" sx={{ mb: 1 }}>
                                Has to be at least 3 characters long
                            </Alert>
                        )}
                        <form onSubmit={handleSubmit}>
                            <TextField
                                size="small"
                                label="Update note"
                                variant="outlined"
                                value={updateField}
                                onChange={(e) => setUpdateField(e.target.value)}
                                fullWidth
                                required
                                autoFocus
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="small"
                                sx={{ mt: 1 }}
                            >
                                Submit
                            </Button>
                        </form>
                    </Box>
                )}
            </CardContent>
        </Card>
    )
}

export default NoteItem;