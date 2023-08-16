import React from "react";
import "./style.scss";
const HeroBanner = () => {
  return (
    <>
      <div className="heroBanner">
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">Welcome to the movie app</span>
            <span className="subTitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              eligendi delectus iure. Eum asperiores officiis temporibus, sit
              repellendus consectetur libero alias reiciendis repellat minima
              nam, minus maxime a voluptatibus. Voluptates, vero omnis?{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
