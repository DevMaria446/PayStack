import "./Fourth.css";
import React from "react";
import { Mari } from "../../dummy";

const Fourth = () => {
  return (
    <>
      <div className="fourth">
        <div className="fourth-wrapper">
          <div className="fourth-text">
            <h1>
              Powering growth for amazing
              <br /> businesses
            </h1>
            <p>
              Paystack is a growth engine for a new generation of innovative,
              forward-looking organizations operating in Afr.
            </p>
          </div>
          <div className="fourth-image">
            {Mari.map((i) => (
              <div className="f-img1">
                <img className="f-img" src={i.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fourth;
