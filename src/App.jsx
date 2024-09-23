import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./contexts/AuthContext";
import SignUp from './pages/SignUp'
const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
              <Routes>
                <Route path="/" element={<SignUp />} />
                {/* <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<User />} />
                <Route path="/bus" element={<Bus />} />
                <Route path="/profile" element={<Profile />} /> */}
              </Routes>
              <ToastContainer />
        </AuthProvider>
      </Router>
    </>
  );
}

export default App