import { check } from "../dummy";
import "./PaymentCard1.css";
import React from "react";

const PaymentCard1 = () => {
  return (
    <>
      <div className="pay-card">
        <div className="pay-card-wrap1">
          <section className="pay-card-right1">
            <h1>Build custom payments experiences with well-documented APIs</h1>
            <p className="pay-card-p1">
              Developers love our thorough, well-documented APIs that let you to
              build everything from simple weekend projects, to complex
              financial products serving hundreds of thousands of customers. If
              you can imagine it, you can build it with Paystack
            </p>
            <div className="pay-div1">
              {check.map((i, idx) => (
                <span key={idx} className="pay-span1">
                  <div className="pay-div-img1">
                    <img src={i.img} alt="" />
                  </div>
                  <p>{i.text}</p>
                </span>
              ))}
            </div>

            <p className="pay-find1">Paystack Api Quickstart</p>
          </section>
          <section className="pay-card-left1">
            <img src="/appi.png" alt="" />
          </section>
        </div>
      </div>
    </>
  );
};

export default PaymentCard1;
