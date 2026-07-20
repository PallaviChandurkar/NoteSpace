import { Link } from "react-router-dom";

function Home(){
    return (
        <>
            <div className="">
                <div className="max-w-6/12 mx-auto my-24">
                    <h1 className="text-5xl font-bold my-5">The simplest way to keep notes</h1>
                    <p className="text-xl text-center">All your notes, synced on all your devices. Get Simplenote now for iOS, Android, Mac, Windows, Linux, or in your browser.</p>
                    <div className="text-center my-8">
                        <Link to="/login"><button className="bg-black text-white text-lg py-3 px-8 rounded-lg cursor-pointer">Sign up now</button></Link>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default Home;