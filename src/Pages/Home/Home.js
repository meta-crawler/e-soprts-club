import React from "react";
import Nextmatch from "../Nextmatch/Nextmatch";
import Banner from "./Banner/Banner";
import OurTeam from "./OurTeam/OurTeam";
import Sponsored from "./Sponsored/Sponsored";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Sponsored />
      <Nextmatch></Nextmatch>
      <OurTeam />
    </div>
  );
};

export default Home;
