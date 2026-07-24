import { IoMenuSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { BsLayoutSidebar } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote,deleteNote,updateNote } from "../utilities/notesSlice";
import { Link } from "react-router-dom";
import { changeTheme } from "../utilities/themeSlice";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Notes = () => {
    const notes = useSelector((state) => state.notes.allnotes) 
    const isDarkTheme = useSelector((state) => state.theme.isDarkTheme)  
    const dispatch = useDispatch();
    const [showButton, setShowButton] = useState(true);
    const [text,setText] = useState("");
    const [currentNote,setCurrentNote] = useState(null)
    const inputText = useRef();

    const createNote = () => {
        const note = {
            id: Date.now(),
            content: ""
        }
        dispatch(addNote(note));
        setCurrentNote(note);  
        setText("");
        setShowButton(false);
    }

    useEffect(() => {
        if(!showButton && inputText.current){
            inputText.current.focus();
        }
    },[showButton])

    const handleTextChange = (e) => {
        const value = e.target.value;
        setText(value);
        dispatch(updateNote({
            id: currentNote.id,
            content: value
        }))

    }

    const deletefunc = () => {
        dispatch(deleteNote(currentNote.id))
    }

    const togglefunc = () => {
        dispatch(changeTheme());
    }

    
  return (
    <div className={isDarkTheme ? "flex h-screen bg-white text-black" : "flex h-screen bg-gray-800 text-white"}>
        <div className="w-3/12 border-r border-gray-600">
            <div className="flex items-center px-6 gap-24 h-12 border-b border-gray-600">
                <Link to="/sidebar"><span className="text-xl"><IoMenuSharp /></span></Link>
                <h1 className="text-lg">All Notes</h1>
                <span onClick={createNote} className="text-xl cursor-pointer"><FaRegEdit /></span>
            </div>
            <div className="flex gap-5 items-center px-6 py-2 border-b border-gray-600">
                <span className="text-xl"><IoSearch /></span>
                <p>Search all notes and tags</p>
            </div>
            <div className="px-6 py-2 bg-gray-300 border-b border-b-white">
                {
                    notes.map((note) => (
                        <div 
                            key={note.id} 
                            style={{borderBottom: "1px solid black", cursor: "pointer"}}
                            onClick={() => {
                                console.log(`Selected note: ${note.id}`);
                                setCurrentNote(note)
                                setText(note.content)
                                inputText.current?.focus();
                            }}
                        > 
                            {note.content.slice(0,20)}
                        </div>
                    ))
                }
            </div>
            {
                showButton && 
                <div className="my-40 text-center">
                    <button onClick={createNote} className="text-blue-800 cursor-pointer">Create your first note</button>
                </div>
            }
        </div>
        <div className="w-9/12">
            <div className="flex justify-between items-center h-12 px-6 border-b border-gray-600">
                <span className="text-xl"><BsLayoutSidebar /></span>
                <div className="flex gap-4 items-center">
                    <span onClick={deletefunc} className="text-xl cursor-pointer"><FaRegTrashCan /></span>
                    <button onClick={togglefunc} className="px-4 py-1 border-2 border-gray-300 rounded-lg cursor-pointer">{isDarkTheme ? <MdOutlineDarkMode /> : <MdOutlineLightMode /> }</button>
                </div>
            </div>
            <div>
                {
                    !showButton && 
                    <textarea ref={inputText} value={text} onChange={handleTextChange} className="w-5xl h-96 border border-black m-14 p-3 "></textarea>
                }
            </div>
        </div>
    </div>
  )
}

export default Notes;