import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/common/Navbar";
import Signup from "./components/signup";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import updatePassword from "./pages/UpdatePassword"
import UpdatePassword from "./pages/UpdatePassword";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="signup" element={<Signup/>} />
        <Route path="login" element={<Login/>} />
        <Route path="forgot-password" element = {<ForgetPassword/>}/>
        <Route path="update-password/:id" element = {<UpdatePassword/>}/>
      </Routes>

  

  
    </div>
  );
}

export default App;
