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
            content: "New Note..."
        }
        dispatch(addNote(note));
        setCurrentNote(note);  
        setText("");
        setShowButton(false);
    }

    useEffect(() => {
        if(currentNote && inputText.current){
            inputText.current.focus();
        }
    },[currentNote])

    const handleTextChange = (e) => {
        const value = e.target.value;
        setText(value);

        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;

        dispatch(updateNote({
            id: currentNote.id,
            content: value
        }))

    }

    const deletefunc = () => {
        dispatch(deleteNote(currentNote));
        setText("");
        console.log("function called",currentNote.id)
    }

    const togglefunc = () => {
        dispatch(changeTheme());
    }

    
  return (
    <div className={isDarkTheme ? "h-screen flex bg-white text-black" : "h-screen flex bg-gray-800 text-white"}>
        <div className="w-full md:w-3/12 border-r border-gray-600">
            <div className="flex items-center px-6 md:px-2 lg:px-4 gap-16 md:gap-8 lg:gap-28 h-12 border-b border-gray-600">
                <Link to="/sidebar"><span className="text-xl"><IoMenuSharp /></span></Link>
                <h1 className="text-lg md:text-sm lg:text-lg">All Notes</h1>
                <span onClick={createNote} className="text-xl cursor-pointer"><FaRegEdit /></span>
            </div>
            <div className="">
                <input className="w-80 md:w-44 lg:w-80 mx-7 md:mx-2 text-sm lg:text-lg outline-none py-2 px-3 md:px-1" type="text" placeholder="Search all notes and tags" />
                {/* <span className="text-xl"><IoSearch /></span>
                <p>Search all notes and tags</p> */}
            </div>
            <div className="bg-gray-300 p-1">
            <div className="border-b border-b-white">
                {
                    notes.map((note) => (
                        <div 
                            key={note.id} 
                            style={{borderBottom: "1px solid white",lineHeight:"2.5", cursor: "pointer"}}
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
            </div>
            {
                showButton && 
                <div className="my-40 md:my-24 lg:my-40 text-center">
                    <button onClick={createNote} className="text-blue-800 md:text-sm lg:text-lg cursor-pointer">Create your first note</button>
                </div>
            }
        </div>
        <div className="md:w-5/12 lg:w-9/12">
            <div className="flex justify-between items-center h-12 px-6 md:px-2 lg:px-6 border-b border-gray-600">
                <span className="text-xl"><BsLayoutSidebar /></span>
                <div className="flex gap-4 md:gap-3 lg:gap-4 items-center">
                    <span onClick={deletefunc} className="text-xl cursor-pointer"><FaRegTrashCan /></span>
                    <button onClick={togglefunc} className="px-4 md:px-1 lg:px-2 py-1 border-2 border-gray-300 rounded-lg cursor-pointer">{isDarkTheme ? <MdOutlineDarkMode /> : <MdOutlineLightMode /> }</button>
                </div>
            </div>
            <div className="h-screen p-4">
                {
                    currentNote && 
                    <textarea ref={inputText} value={text} onChange={handleTextChange} className="w-5xl min-h-screen p-3 resize-none outline-none"></textarea>
                }
            </div>
        </div>
    </div>
  )
}

export default Notes;