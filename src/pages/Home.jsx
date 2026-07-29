import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

function Home(){

    const isDarkTheme = useSelector((state)=>state.theme.isDarkTheme);

    return (
        <>
            <div className={isDarkTheme ? "w-screen h-screen bg-white text-black" : "w-screen h-screen bg-gray-800 text-white"}>
            <Navbar />
            <div>
                <div className="w-64 md:w-8/12 text-center lg:max-w-6/12 mx-auto my-24">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-5">The simplest way to keep notes</h1>
                    <p className="text-lg lg:text-xl text-center">All your notes, synced on all your devices. Get Simplenote now for iOS, Android, Mac, Windows, Linux, or in your browser.</p>
                    <div className="text-center my-8">
                        <Link to="/login">
                            <button className="bg-black text-white text-lg py-3 px-8 rounded-lg cursor-pointer">Sign up now</button>
                        </Link>
                    </div>    
                </div>
            </div>
            </div>
        </>
    )
}

export default Home;