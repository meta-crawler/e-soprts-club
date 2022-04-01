import React from "react";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import Fans from "../Fans/Fans";
import Nextmatch from "../Nextmatch/Nextmatch";
import OurTeam from "../OurTeam/OurTeam";
import Sponsored from "../Sponsored/Sponsored";
import Statistics from "../Statistics/Statistics";
import Travel from "../Travel/Travel";
import Video from "../Video/Video";

const Home = () => {
  return (
    <div>
      <Banner />
      <Sponsored />
      <Statistics />
      <Nextmatch />
      <OurTeam />
      <Video />
      <Travel />
      <Fans />
      <Counter />
    </div>
  );
};

export default Home;
