import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState();
  const transitionNav = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  return (
    <>
      <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_content">
          <img className="nav_logo" src="logo.svg" alt="netflix logo" />
          <img
            className="nav_avatar"
            src="avatar.jpeg"
            alt="avatar place holder"
          />
        </div>
      </div>
    </>
  );
};
export default Nav;
