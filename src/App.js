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
import PlayerDetails from "./Pages/PlayerDetails/PlayerDetails";
import ContactUs from "./Pages/Home/ContactUs/ContactUs";
import AuthProvider from "./Pages/context/AuthProvider/AuthProvider";
import SingleProduct from "./Pages/Home/SingleProduct/SingleProduct";
import CricketHome from "./Pages/Cricket/CricketHome/CricketHome";
import HockeyPuckHome from "./Pages/HockeyPuck/HockeyPuckHome/HockeyPuckHome";
import TableTennisHome from "./Pages/TableTennis/TableTennisHome/TableTennisHome";
import BaseBallHome from "./Pages/BaseBall/BaseBallHome/BaseBallHome";
import BasketBallHome from "./Pages/BasketBall/BasketBallHome/BasketBallHome";
import VolleyBallHome from "./Pages/VolleyBall/VolleyBallHome/VolleyBallHome";
import Dashbord from "./Pages/Dashbord/Dashbord";
/* import DashBord from "./Pages/DashBord/DashBord/DashBord";
import Payment from "./Pages/DashBord/Pay/Payment";
import Review from "./Pages/DashBord/Review/Review";
import MyOrders from "./Pages/DashBord/MyOrders/MyOrders";
import DashBordHome from "./Pages/DashBord/Home/DashBordHome"; */
// import Nextmatch from './Pages/Nextmatch/Nextmatch';



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
          <Route path="/singleProduct/:id" element={<SingleProduct/>} />
      
          <Route path="/dashbord" element={<Dashbord/>}> 
          {/* <Route exact path={'/dashbord/myOrder'} element={<MyOrders />} /> 
          <Route exact path={'/dashbord/home'} element={<DashBordHome />} /> 
                <Route path={`/dashbord/review`} element={ <Review /> } />
            <Route path={`/dashbord/pay`} element={<Payment />} /> */}
          </Route>

        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
