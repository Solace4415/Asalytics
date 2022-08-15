import React from "react";
import "./algorand.css";
import Image01 from "../../assets/bitcoin-ic 1.png";

type Active = {
  active: Boolean;
};

const Algorand = (props: Active) => {
  return (
    <div className="algorand">
      <img src={Image01} alt="" className="algorand-img" />
      <p className="algorand-p">Algorand</p>
      <button
        className={props.active ? "algorand-button" : "algorand-button red"}
      >
        {props.active ? "available" : "unavailable"}
      </button>
    </div>
  );
};

export default Algorand;
