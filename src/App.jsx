import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbar from "./components/common/Navbar";
import Signup from "./components/signup";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/verifyEmail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setToken } from "./slices/authSlice";
import { setUser } from "./slices/profileSlice";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollTop";
import ContactForm from "./components/ContactUs/ContactForm";
import MyProfile from "./components/dashboard/MyProfile";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Error from "./components/common/Error";
import Settings from "./components/dashboard/Settings";
import EnrolledCourses from "./components/dashboard/EnrolledCourses";
import Cart from "./components/dashboard/cart";
import { ACCOUNT_TYPE } from "./utils/costans";

function App() {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const user = JSON.parse(localStorage.getItem("user"));

    if (token) dispatch(setToken(token));
    if (user) dispatch(setUser(user));
  }, [dispatch]);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter ">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/update-password/:id" element={<UpdatePassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />

          { 
           
          user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path="dashboard/cart" element={<Cart />} />
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses/>}
              />
            </>
          )}

        </Route>
        

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
