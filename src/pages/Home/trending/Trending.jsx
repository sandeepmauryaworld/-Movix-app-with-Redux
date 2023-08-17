import React from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import axios from "axios";
import "../style.scss";
const Trending = () => {
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
      </ContentWrapper>
    </div>
  );
};

export default Trending;
