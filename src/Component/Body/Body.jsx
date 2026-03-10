import PaymentCard from "../PaymentCard/PaymentCard";
import PaymentCard1 from "../PaymentCard1/PaymentCard1";
import PaymentCard2 from "../PaymentCard2/PaymentCard2"

import "./Body.css";
const Body = () => {
  return (
    <>
      <div className="block"></div>
      <main className="second-body">
        <div className="second-wrapper">
          <div className="sec-pay-text">
            <h1>Simple, easy payments</h1>
            <p>Building a business is hard. Getting paid shouldn't be.</p>
          </div>
          <PaymentCard />
          <PaymentCard1 />
          <PaymentCard2/>
        </div>
      </main>
    </>
  );
};
export default Body;
