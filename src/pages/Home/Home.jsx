import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
const Home = () => {
  return (
    <>
      <div className="homepage">
        <HeroBanner />
        <div style={{ height: 1000 }}></div>
      </div>
    </>
  );
};

export default Home;
