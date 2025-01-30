import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/SideBar.css";

const Sidebar = () => {
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    fetch("https://api.vatcomply.com/currencies")
      .then((res) => res.json())
      .then((data) => setCurrencies(data))
      .catch((error) => console.error("Error fetching currencies:", error));
  }, []);

  return (
    <div className="sidebar">
      <h2 className="headline">Currency List</h2>
      <ul>
        {Object.entries(currencies).map(([code, details]) => (
          <li key={code}>
            <Link to={`/${code}`}>{details.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;