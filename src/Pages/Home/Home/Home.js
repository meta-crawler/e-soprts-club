import React from "react";
import Banner from "../Banner/Banner";
import Nextmatch from "../Nextmatch/Nextmatch";
import Sponsored from "../Sponsored/Sponsored";
import Video from "../Video/Video";

const Home = () => {
  return (
    <div>
      <Banner />
      <Sponsored />
      <Nextmatch />
      <Video />
    </div>
  );
};

export default Home;
