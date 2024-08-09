import { pizzaData } from "../../constants/data";
import Pizza from "../Pizza";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Authentic Italian snacks to choose from</p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza {...pizza} key={pizza.name} />
        ))}
      </ul>
    </main>
  );
};

export default Menu;
