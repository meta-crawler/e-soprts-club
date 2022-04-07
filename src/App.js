import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./Pages/Booking/Booking";
import EventRegister from "./Pages/EventRegister/EventRegister";
import FootBallHome from "./Pages/Football/FootBallHome/FootBallHome";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";



import PlayerDetails from "./Pages/PlayerDetails/PlayerDetails";
import ContactUs from "./Pages/Home/ContactUs/ContactUs";

import AuthProvider from "./Pages/context/AuthProvider/AuthProvider";
import SingleProduct from "./Pages/Home/SingleProduct/SingleProduct";
// import Nextmatch from './Pages/Nextmatch/Nextmatch';



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
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/event-register" element={<EventRegister />} />

          <Route path="/playerDetails/:id" element= {<PlayerDetails /> } />
          <Route path="/singleProduct/:id" element={<SingleProduct/>} />
        </Routes>
        <Footer />
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
