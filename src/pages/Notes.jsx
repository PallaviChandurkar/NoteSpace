import { IoMenuSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { BsLayoutSidebar } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Notes = () => {
  return (
    <div className="flex h-screen">
        <div className="w-3/12 border-r border-gray-600">
            <div className="flex items-center px-6 gap-24 h-12 border-b border-gray-600">
                 <span className="text-xl"><IoMenuSharp /></span>
                <h1 className="text-lg">All Notes</h1>
                <span className="text-xl"><FaRegEdit /></span>
            </div>
            <div className="flex gap-5 items-center px-6 py-2 border-b border-gray-600">
                <span className="text-xl"><IoSearch /></span>
                <p>Search all notes and tags</p>
            </div>
        </div>
        <div className="w-9/12">
            <div className="flex justify-between items-center h-12 px-6 border-b border-gray-600">
                <span className="text-xl"><BsLayoutSidebar /></span>
                <span className="text-xl"><FaRegTrashCan /></span>
            </div>
        </div>
    </div>
  )
}

export default Notes;