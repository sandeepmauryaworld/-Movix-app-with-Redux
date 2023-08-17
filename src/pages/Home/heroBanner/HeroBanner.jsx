import React, { useState, useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/LazyLoadImage/img";
const HeroBanner = () => {
  // for background img chnge on every refresh  for hero banner
  const [background, setBackground] = useState("");
  // jb search click pr click krnege to ye navigate krega exact match pr

  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { url } = useSelector((state) => state.home);

  // api call kraynege- hero banner pr new img aayegi each time
  const { data, loading } = useFetch("/movie/upcoming");

  // 20 obj data mese img ki url dyanamic chnge ho
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  // search input type kre to state me save hoga
  const searchQueryHandler = (e) => {
    // chek search bar empty or not  and enter hit krne pr api call hoga bs

    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <>
      <div className="heroBanner">
        {!loading && (
          <div className="backdrop_img">
            <Img src={background} />
          </div>
        )}
        <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome .</span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover. Explore now.
            </span>

            <div className="searchInput">
              <input
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                type="text"
                placeholder="Search For a Movie or Tv Show..."
              />

              <button>Search</button>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default HeroBanner;
