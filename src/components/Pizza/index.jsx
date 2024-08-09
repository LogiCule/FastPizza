import PropTypes from "prop-types";

const Pizza = ({ name, ingredients, price, photoName, soldOut }) => {
  return (
    <li className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
      </div>
      <span>{soldOut ? "SOLD OUT" : price}</span>
      {}
    </li>
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
