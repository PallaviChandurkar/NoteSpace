import LOGO from "../images/notespace_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
         <div className="max-w-8/12 py-4 mx-auto">
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <Link to='/'><img className="w-10" src={LOGO} alt="logo" /></Link>
                        <Link to='/'><h1 className="text-xl">NoteSpace</h1></Link>
                    </div>
                    <div className="flex items-center">
                        <ul className="flex gap-4">
                            <Link to='/contactus'><li className="py-1">Contact Us</li></Link>
                            <Link to='/help'><li className="py-1">Help</li></Link>
                            <Link to='/support'><li className="py-1">Support</li></Link>
                            <Link to='/login'><li><button className="border-2 border-gray-300 px-4 py-1 rounded-md cursor-pointer">Login</button></li></Link>
                            <li><button className="border-2 border-gray-300 px-4 py-1 rounded-md cursor-pointer">SignUp</button></li>
                        </ul>
                    </div>
                </div>
                </div>
    </div>
  )
}

export default Navbar;