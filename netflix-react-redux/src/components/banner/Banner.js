import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import requests from "../../api/apiRequests";
import { useSelector } from "react-redux";
import { selectMovie } from "../../features/slices/movieSlice";
import { abbreviateString } from "../../utils/string";

const Banner = () => {
  const movie = useSelector(selectMovie);

  if (movie.length === 0) return <p>movies loading</p>; //defensive check

  const { name, title, vote_average, overview, backdrop_path } =
    movie[Math.floor(Math.random() * movie.length)];

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_content">
          <h1 className="banner-title">{name || title}</h1>
          <div className="banner_btns">
            <button className="banner_btn">Play</button>
            <button className="banner_btn">My List</button>
          </div>
          <h1 className="banner_description">
            {abbreviateString(overview, 150)}
          </h1>
          <p className="vote_audience">Audience Score: {vote_average}</p>
        </div>
        <div className="banner_fadeBottom" />
      </header>
    </>
  );
};
export default Banner;
