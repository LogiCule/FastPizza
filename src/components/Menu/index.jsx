import { pizzaData } from "../../constants/data";
import Pizza from "../Pizza";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div>
        {pizzaData.map((item) => (
          <Pizza {...item} key={item.name} />
        ))}
      </div>
    </main>
  );
};

export default Menu;
