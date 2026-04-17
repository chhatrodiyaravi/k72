import React from "react";
import Video from "../components/Home/Video";
import HomeTop from "../components/Home/HomeTop";
import HomeBottom from "../components/Home/HomeBottom";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video/>
      </div>
      <div className="h-[110vh] w-screen relative flex flex-col justify-between">
        <HomeTop />
        <HomeBottom />
      </div>
    </div>
  );
};

export default Home;
