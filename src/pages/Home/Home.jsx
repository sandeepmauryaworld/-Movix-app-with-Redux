import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./TopRated/TopRated";
const Home = () => {
  return (
    <>
      <div className="homepage">
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />
        <div style={{ height: 1000 }}></div>
      </div>
    </>
  );
};

export default Home;
