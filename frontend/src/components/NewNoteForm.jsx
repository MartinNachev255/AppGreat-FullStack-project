import { useState } from "react"

const NewNoteForm = ({ addNote }) => {
    const [input, setInput] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addNote(input)
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Add new note:</label>
            <input onChange={(e) => setInput(e.target.value)} value={input}/>
        </form>
    )
}

export default NewNoteForm;