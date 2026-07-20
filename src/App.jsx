import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Help from "./pages/Help";
import Support from "./pages/Support";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App;
