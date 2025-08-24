import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./reducer/index.js";
import {configureStore} from "@reduxjs/toolkit"
import { Toaster } from "react-hot-toast";
import profileReducer from "../src/slices/profileSlice.js"
import cartReducer from "../src/slices/cartSlice.js"


const store = configureStore({
  reducer: rootReducer,
  profile: profileReducer,
  cart: cartReducer,
});






createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider  store={store} >
      <BrowserRouter>
        <App />
        <Toaster/>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
