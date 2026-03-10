import { nav, navigations, navImage } from "../dummy";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="up">
        <p className="Reg">
          {" "}
          Register your business and get a corporate bank account - fast{" "}
        </p>
      </div>
      <header className="header-nav">
        <main className="wrapper-nav">
          <section className="nav-left">
            <img className="nav-image" src="/logo.png" alt="logo" />

            <ul className="nav-ul">
              {navigations.map((data) => (
                <li key={data.id}>{data.texts}</li>
              ))}
            </ul>
          </section>
          <section className="nav-right">
            <ul className="nav-ul-right">
              {nav.map((data) => (
                <li key={data.id}>{data.texts}</li>
              ))}
            </ul>

            <button className="nav-btn"> Create free account</button>
            <img src="nig.svg" alt="" className="nav-img" />
          </section>
        </main>
      </header>
      <main className="map">
        <div className="map-wrap">
          <section className="map-left">
            <div className="map-left-wrap">
              <div className="map-left-wrap-up">
                <h1>Modern online and offline payments for Africa</h1>
                <p className="map-pay">
                  Paystack helps businesses in Africa get paid by anyone,
                  anywhere in the world
                </p>
                <div className="map-left-wrap-btn">
                  <button className="map-nav-btn">
                    {" "}
                    Create a free account
                  </button>
                  <p className="map-sales">Or Contact Sales</p>
                </div>
              </div>
              <div className="map-left-wrap-down">
                <p>Trusted by over 200,000 businesses</p>
                <span className="wrap-span">
                  {navImage.map((i, idx) => (
                    <img src={i.img} key={idx} alt="" />
                  ))}
                </span>
              </div>
            </div>
          </section>
          <section className="map-right"></section>
        </div>
      </main>
    </>
  );
};
export default Header;
