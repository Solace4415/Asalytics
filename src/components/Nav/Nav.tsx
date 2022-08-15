import React from "react";
import "./nav.css";
import Image02 from "../../assets/Vector 2.png"

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={Image02} alt=""  className="nav-img"/>
        <p className="nav-logo-text">SAlytics</p>
      </div>
      <button className="nav-btn">ANALYSE ASAs</button>
    </div>
  );
};

export default Nav;
