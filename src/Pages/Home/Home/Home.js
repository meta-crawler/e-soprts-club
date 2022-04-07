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
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <Sponsored />
      <Statistics />
      <ControledSlider />
      <Nextmatch />
      <OurTeam />
      <Video />
      <Travel />
      <WorkHome />
      <Fans />
     
      <ContactUs />
    </div>
  );
};

export default Home;
