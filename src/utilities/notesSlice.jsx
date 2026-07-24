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
        updateNote: (state,action) => {
            //console.log({action})
            const {id,content} = action.payload;
            const note = state.allnotes.find((note)=>note.id===id);
            
            if(note){
                note.content = content;
                //console.info('All notes: ', state.allnotes)
            } else {
                //console.log('Note not found. ID: ', id)
            }
        },
        deleteNote: (state,action) => {
            state.allnotes = state.allnotes.filter((note)=>note.id!==action.payload.id)
            console.log("function called")
        }
    }
})

export const { addNote,updateNote ,deleteNote} = notesSlice.actions

export default notesSlice.reducer