import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from './Pages/Home/Home';
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
        {/* <Route path="/nextmatch" element={<Nextmatch />} /> */}
      </Routes>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
