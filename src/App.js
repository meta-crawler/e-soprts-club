import React from 'react';

// import './App.css';
import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
// import Nextmatch from './Pages/Nextmatch/Nextmatch';
function App() {
  return (
    <div className="App">
       <Router>
        <Navigation></Navigation>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
