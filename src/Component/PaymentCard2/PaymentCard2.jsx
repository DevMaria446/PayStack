import "../PaymentCard2/PaymentCard2.css";

function PaymentCard2() {
  return (
    <div className="pay-card2">
      <div className="pay-card-wrap2">
        <section className="pay-card-left2">
          <video className="vivi" autoPlay muted loop playsInline>
            <source
              src="https://assets.paystack.com/assets/video/content/Advanced-Fraud-Protection.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </section>
        <section className="pay-card-right2">
          <h1>
            Protect yourself and your customers with advanced fraud detection
          </h1>
          <p>
            Paystack’s combination of automated and manual fraud systems protect
            you from fraudulent transactions and associated chargeback claims.
          </p>

          <h1>
            {" "}
            Detailed reporting for accounting, reconciliation, and audits
          </h1>
          <p>
            Understand your customers’ purchase patterns and do easy
            reconciliations with a robust data Dashboard and easy exports.
          </p>
        </section>
      </div>
    </div>
  );
}

export default PaymentCard2;
