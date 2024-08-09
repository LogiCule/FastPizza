import { useEffect } from "react";
import { useState } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());
  const hour = time.getHours();
  const openHour = 12;
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
      {time.toLocaleTimeString()} :{" "}
      {isOpen ? "We are currently open!" : "We are currently closed!"}
    </footer>
  );
};

export default Footer;
