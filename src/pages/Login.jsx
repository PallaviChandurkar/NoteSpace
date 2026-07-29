import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div>
                <div className="w-72 md:w-96 mx-auto my-20 bg-blue-200 rounded-xl">
                    <div className="text-center w-60 mx-auto py-10">
                        <h1 className="text-xl font-bold">Sign in to NoteSpace</h1>
                        <p className="my-2">We'll create an account if you don't have one yet.</p>
                    </div>
                    <div className="w-64 mx-auto py-8">
                        <Link to='/notes'>
                            <button className="bg-white border-2 cursor-pointer flex items-center gap-3 rounded-xl border-gray-300 py-1 px-4">
                                <FcGoogle />Continue with Google
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;