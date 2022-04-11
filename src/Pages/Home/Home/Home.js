import React from "react";
import ControledSlider from "../../ControledSlider/ControledSlider";

import Banner from "../Banner/Banner";

import Fans from "../Fans/Fans";
import Nextmatch from "../Nextmatch/Nextmatch";
import OurTeam from "../OurTeam/OurTeam";
import Sponsored from "../Sponsored/Sponsored";
import Statistics from "../Statistics/Statistics";
import Travel from "../Travel/Travel";
import Video from "../Video/Video";
import WorkHome from "../WorkHome/WorkHome";

import Products from "../Products/Products";
import CountSlider from "../../CountSlider/CountSlider";

const Home = () => {
  return (
    <div>
      <Banner />
      <Sponsored />
      <WorkHome />
      <Statistics />
      <Nextmatch />
      <ControledSlider />
      <OurTeam />
      <Video />
      <Products />
      <Travel />
      <Fans />
      <CountSlider />
     
      
    </div>
  );
};

export default Home;
