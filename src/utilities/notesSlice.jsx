import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        allnotes: []
    },
    reducers: {
        addNote: (state,action) => {
            state.allnotes.push(action.payload)
        },
        // updateNote: (state, action) => {
        //     const noteindex = state.allnotes.indexOf((note) => note.id == action.payload.id);
        // }
    }
})

export const { addNote } = notesSlice.actions

export default notesSlice.reducer