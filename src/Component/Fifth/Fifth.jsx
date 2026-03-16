import "./Fifth.css";
import React from "react";
// import Card from "../../Card/card";
import Card1 from "../Card1/Card1";

const Fifth = () => {
  return (
    <div className="fifth">
      <div className="fifth-wrapper">
        <div className="fifth-text">
          <h1>
            Backed by strong global
            <br /> partners
          </h1>
          <p>
            Paystack is backed by notable investors as well as some of the best
            payments companies on the planet.
          </p>
        </div>
        <div className="fifth-card">
          <Card1
            name="Patrick Collison"
            position={"CEO, Stripe"}
            profile={
              "https://assets.paystack.com/%20assets/img/testimonial-authors/_400x400_crop_center-center_82_line/patrick-collison-headshot.jpg"
            }
            title={
              "Paystack is highly technical and fanatically customer oriented. We’re excited to back such people in one of the world’s fastest-growing regions."
            }
            image={
              "https://assets.paystack.com/assets/img/logos/merchants/_300x124_crop_center-center_60_line/Stripe.png"
            }
          />
          <Card1
            name={"Otto Williams"}
            profile={
              "https://assets.paystack.com/%20assets/img/testimonial-authors/_200x200_crop_center-center_line/otto-williams.jpeg"
            }
            position={
              "Head of Strategic Partnerships, Fintech & Ventures CEMEA, Visa"
            }
            title={
              "Our investment in Paystack aligns with the kind of investments we look for - those that will help extend our reach into the global commerce ecosystem"
            }
            image={
              "https://assets.paystack.com/assets/img/logos/merchants/_1536x491_crop_center-center_60_line/Visa-_-Color.png"
            }
          />
          <Card1
            profile={
              "https://assets.paystack.com/%20assets/img/testimonial-authors/_400x400_crop_center-center_82_line/michael-siebel-headshot.jpeg"
            }
            position={"CEO, Partner, Y Combinator"}
            name={"Michael Seibel"}
            title={
              "As YC's first Nigerian startup Paystack leads the charge of great companies coming out of Africa, powering modern payments for an entire continent."
            }
            image={
              "https://assets.paystack.com/assets/img/logos/merchants/_257x257_crop_center-center_line/ycombinator-logo.png"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Fifth;
