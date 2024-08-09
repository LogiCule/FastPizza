import { useEffect } from "react";
import { useState } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());
  const hour = time.getHours();
  const openHour = 10;
  const closeHour = 22;

  const isOpen = !(hour < openHour || hour > closeHour);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are open until {closeHour - 12}:00 PM. Come visit us or order
            online.
          </p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <div className="order">
          <p>We open at {openHour}:00 AM.</p>
        </div>
      )}
    </footer>
  );
};

// {time.toLocaleTimeString()} :{" "}
// {isOpen ? "We are currently open!" : "We are currently closed!"}

export default Footer;
