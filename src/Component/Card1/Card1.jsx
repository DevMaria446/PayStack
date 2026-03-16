import "./Card1.css";

const Card1 = ({ image, title, profile, name,position }) => {
  return (
    <div className="card1-body">
      <img className="image-card" src={image} alt="" />
      <h1> {title}</h1>
      <span>
        <div className="ciri1"><img src={profile} alt="" /></div>
        <div className="pp">
          <p className="pp-name">{name}</p>
          <p>{position}</p>
        </div>
      </span>
    </div>
  );
};

export default Card1;
