import { useState } from "react";

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
        <div>
            <div style={{border: 'solid', margin: 10, width: 200, paddingLeft: 5}}>
                <p>ID: {note.id}</p>
                <p>Note: {note.text}</p>
            </div>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
            <button onClick={() => setShowUpdateField(!showUpdateField)} style={{ margin: 5}}>Update</button>
            {showUpdateField && 
            <div>
                {showError && <p style={{color: 'red'}}>Has to be at least 3 characters long</p>}
            <form onSubmit={handleSubmit}>
            <input onChange={(e) => setUpdateField(e.target.value)} value={updateField}/>
            </form>
            </div>}
        </div>

    )
}

export default NoteItem;