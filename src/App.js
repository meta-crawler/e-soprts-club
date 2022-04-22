import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BaseBallDetails from "./Pages/BaseBall/BaseBallDetails/BaseBallDetails";
import BaseBallHome from "./Pages/BaseBall/BaseBallHome/BaseBallHome";
import BaseketBallDetails from "./Pages/BasketBall/BaseketBallDetails/BaseketBallDetails";
import BasketBallHome from "./Pages/BasketBall/BasketBallHome/BasketBallHome";
import Booking from "./Pages/Booking/Booking";
import AuthProvider from "./Pages/context/AuthProvider/AuthProvider";
import CricketHome from "./Pages/Cricket/CricketHome/CricketHome";
import CricketPlayerDetails from './Pages/Cricket/cricketPlayerDetails/CricketPlayerDetails';
import EventRegister from "./Pages/EventRegister/EventRegister";
import FootBallHome from "./Pages/Football/FootBallHome/FootBallHome";
import HockeyPlayersDetails from "./Pages/HockeyPuck/HockeyPlayersDetails";
import HockeyPuckHome from "./Pages/HockeyPuck/HockeyPuckHome/HockeyPuckHome";
import ContactUs from "./Pages/Home/ContactUs/ContactUs";
import Home from "./Pages/Home/Home/Home";
import SingleProduct from "./Pages/Home/SingleProduct/SingleProduct";
import Login from "./Pages/Login/Login";
import PlayerDetails from "./Pages/PlayerDetails/PlayerDetails";
import Register from "./Pages/Register/Register";
import TableTennishDetails from "./Pages/TableTennis/TableTennishDetails/TableTennishDetails";
import TableTennisHome from "./Pages/TableTennis/TableTennisHome/TableTennisHome";
import VolleyBallDetails from "./Pages/VolleyBall/VolleyBallDetails/VolleyBallDetails";
import VolleyBallHome from "./Pages/VolleyBall/VolleyBallHome/VolleyBallHome";


// import Nextmatch from './Pages/Nextmatch/Nextmatch';

// test

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/football" element={<FootBallHome />} />
            <Route path="/cricket" element={<CricketHome />} />
            <Route path="/hockeyPuck" element={<HockeyPuckHome />} />
            <Route path="/tableTennis" element={<TableTennisHome />} />
            <Route path="/baseBall" element={<BaseBallHome />} />
            <Route path="/basketBall" element={<BasketBallHome />} />
            <Route path="/volleyBall" element={<VolleyBallHome />} />
            
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/event-register" element={<EventRegister />} />
          <Route path="/playerDetails/:id" element= {<PlayerDetails /> } />
          <Route path="/hokeypalyer/:id" element= {<HockeyPlayersDetails /> } />
          <Route path="/cricketPlayer/:id" element= {<CricketPlayerDetails /> } />
          <Route path="/tableTanishPlayer/:id" element= {<TableTennishDetails /> } />
          <Route path="/baseballplayer/:id" element= {<BaseBallDetails /> } />
          <Route path="/basketBallPlayer/:id" element= {<BaseketBallDetails /> } />
          <Route path="/volleyballplayer/:id" element= {<VolleyBallDetails /> } />
          <Route path="/singleProduct/:id" element={<SingleProduct/>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
