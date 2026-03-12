import { checker } from "../../dummy";
import "../PaymentCard/PaymentCard.css";
function PaymentCard() {
  return (
    <div className="pay-card">
      <div className="pay-card-wrap">
        <section className="pay-card-left">
          <img src="/payment.gif" alt="" />
        </section>
        <section className="pay-card-right">
          <h1>Delight customers with a seamless payments experience</h1>
          <p>
            Give your customers the gift of modern, frictionless, painless
            payments. Integrate Paystack once and let your customers pay you
            however they want.
          </p>
          <div className="pay-div">
            {checker.map((i, idx) => (
              <span key={idx} className="pay-span">
                <div className="pay-div-img">
                  <img src={i.img} alt="" />
                </div>
                <p>{i.text}</p>
              </span>
            ))}
          </div>
          <h1> Enjoy phenomenal transaction success rates</h1>
          <p>
            {" "}
            We automatically route payments through the most optimal channels,
            ensuring the highest transaction success rates in the market.
          </p>
          <p className="pay-find">Find out how we achieve our Success Rate</p>
        </section>
      </div>
    </div>
  );
}

export default PaymentCard;
