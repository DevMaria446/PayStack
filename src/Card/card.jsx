import "./card.css";

const Card = ({ image, title, desc, other }) => {
  return (
    <div className="card-body">
      <img className="image-card" src={image} alt="" /> <h1> {title}</h1>
      <p> {desc}</p>
      <span>
         <div className="ciri"></div>
        <p>Learn More</p>
      </span>
    </div>
  );
};

export default Card;
