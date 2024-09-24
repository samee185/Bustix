import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./contexts/AuthContext";
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn';
import Home from './pages/Home';

document.title = "Bustix"
const App = () => {

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            {/* <Route path="/bus" element={<Bus />} />
                <Route path="/profile" element={<Profile />} /> */}
          </Routes>
          <ToastContainer />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App