import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./Pages/Booking/Booking";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import AuthProvider from "./Pages/context/AuthProvider/AuthProvider";
// import Nextmatch from './Pages/Nextmatch/Nextmatch';


import FootBallHome from "./Pages/Football/FootBallHome/FootBallHome";



function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/footballHome" element={<FootBallHome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
