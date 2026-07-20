import Home from "./pages/Home";
// import Help from "./pages/Help";
// import Support from "./pages/Support";
// import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import './index.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/help" element={<Help/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/contactus" element={<ContactUs/>} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/notes" element={<Notes/>} />
      </Routes>
    </>
  )
}

export default App;
