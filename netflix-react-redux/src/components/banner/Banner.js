import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import banner from "../../assets/banner.jpeg";
import requests from "../../api/apiRequests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const getApiData = async () => {
    try {
      const results = await axios.get(requests.fetchNetflixOriginals);
      console.log(results);
      results.data.results.forEach((item, index) => {
        item.uniqueId = Math.random() + index;
      });
      setMovie(results.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  console.log(movie);

  //abbreviate String
  const abbreviateString = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_content">
          <h1 className="banner-title"></h1>
          <div className="banner_btns">
            <button className="banner_btn">Play</button>
            <button className="banner_btn">My List</button>
          </div>
          <h1 className="banner_description">
            {abbreviateString(
              `Test description Test description Test description Test description
            Test description Test description Test description Test description
            Test description Test description Test description Test description`,
              150
            )}
          </h1>
        </div>
        <div className="banner_fadeBottom" />
      </header>
    </>
  );
};
export default Banner;
