import React from "react";
import "./Banner.css";

const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url(https://www.travellingbookjunkie.com/wp-content/uploads/2021/01/14019907992_0544000a68_c.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_content">
          <h1 className="banner-title">Movie Name</h1>
          <div className="banner_btns">
            <button className="banner_btn">Play</button>
            <button className="banner_btn">My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(
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
