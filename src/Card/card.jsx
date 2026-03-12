import "./card.css";

const Card = ({ image, title, desc, other }) => {
  return (
    <div className="card-body">
      <img className="image-card" src={image} alt="" /> <h1> {title}</h1>
      <p> {desc}</p>
      <span></span>
    </div>
  );
};

export default Card;
