import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/common/Navbar";
import Signup from "./components/signup";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/verifyEmail";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setToken } from "./slices/authSlice";
import { setUser } from "./slices/profileSlice";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    if (token) dispatch(setToken(token));
    if (user) dispatch(setUser(user));
  }, [dispatch]);









  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="signup" element={<Signup/>} />
        <Route path="login" element={<Login/>} />
        <Route path="forgot-password" element = {<ForgetPassword/>}/>
        <Route path="update-password/:id" element = {<UpdatePassword/>}/>
         <Route path="verify-email" element = { <VerifyEmail/>}></Route>
        
      </Routes>

  

  
    </div>
  );
}

export default App;
