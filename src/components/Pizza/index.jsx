import PropTypes from "prop-types";

const Pizza = ({ name, ingredients, price, photoName, soldOut }) => {
  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
      </div>
      <span>{price}</span>
      {soldOut && <p>Sold Out</p>}
    </div>
  );
};

Pizza.propTypes = {
  name: PropTypes.string,
  ingredients: PropTypes.string,
  price: PropTypes.number,
  photoName: PropTypes.string,
  soldOut: PropTypes.string,
};

export default Pizza;
