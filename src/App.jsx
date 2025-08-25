import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/common/Navbar";
import SignupForm from "./pages/Signupfrom";
import Signup from "./components/signup";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="signup" element={<Signup/>} />
      </Routes>

  

      {/* <Route path="login" element={<Login />} /> */}
    </div>
  );
}

export default App;
