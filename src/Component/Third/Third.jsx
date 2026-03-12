import Card from "../../Card/card";
import "./Third.css";
import React from "react";

const Third = () => {
  return (
    <>
      <div className="third">
        <div className="third-wrapper">
          <div className="third-text">
            <h1>
              {" "}
              Trusted by 200,000+ <br /> businesses
            </h1>
            <p>
              {" "}
              Thousands of organizations of all sizes trust Paystack to grow
              their business.
            </p>
          </div>
          <div className="third-card">
            <Card
              title="  Paystack for Global Brands"
              image="https://assets.paystack.com/assets/img/content/For-International-Businesses_180823_165939.svg"
              desc="We help global brands accept payments from across Africa"
            />
            <Card
              title={"Paystack for Entrepreneurs"}
              desc={
                "From startup to scale-up, we can support you at every stage of your businesses’ growth"
              }
            />
            <Card
              image={
                "https://assets.paystack.com/assets/img/content/For-Large-Corporations_180823_165502.svg"
              }
              title={"Paystack for Large Organizations"}
              desc={
                "Paystack helps many of the largest corporate and government organizations in Nigeria get paid quickly and securely."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Third;
