import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./css/CurrencyPage.css";

const CurrencyPage = () => {
  const { currency } = useParams();
  const [rates, setRates] = useState({});
  const [currencyName, setCurrencyName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.vatcomply.com/rates?base=` + currency)
      .then((res) => res.json())
      .then((data) => {
        setRates(data.rates);
        setCurrencyName(currency);
      })
      .catch((error) => console.error("Error fetching rates:", error));
  }, [currency]);

  return <div className="currency-page">
    <h1>{currencyName} Exchange Rates</h1>
    <ul className="currency-list">
      {Object.entries(rates).map(([code, rate]) => (
        <li key={code}>
          {code}: {rate.toFixed(2)}
        </li>
      ))}
    </ul>
    <button className="back-button" onClick={() => navigate("/")}>
      Back to Home
    </button>
  </div>
};

export default CurrencyPage;