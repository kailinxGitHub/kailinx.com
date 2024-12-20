import PropTypes from "prop-types";
import "../styles/Card.css";
import "../styles/Roboto.css";

function Card({ title, object, link }) {
  return (
    <div className="card" onClick={() => window.open(link)}>
      <div className="card-diffuse"></div>
      <div className="card-title roboto-regular">{title}</div>
      <div className="card-background">
        <div className="card-icon">{object}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  object: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
