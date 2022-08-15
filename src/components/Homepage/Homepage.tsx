import React from "react";
import Algorand from "../Algorand/Algorand";
import Nav from "../Nav/Nav";

import "./homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Nav />
      <p className="homepage-p">
        List of Algorand Standard Assets
        <br /> on ASAlytics
      </p>
      <div className="homepage-algo">
        <Algorand active />
        <Algorand active />
        <Algorand active />
        <Algorand active />
        <Algorand active={false} />
        <Algorand active={false} />
        <Algorand active={false} />
        <Algorand active={false} />
        <Algorand active={false} />
        <Algorand active={false} />
        <Algorand active={false} />
        <Algorand active />
      </div>
    </div>
  );
};

export default Homepage;
