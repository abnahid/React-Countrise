import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedFlag }) => {
  const { name, flags, region, population, capital } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    if (!visited) {
      setVisited(true);
      handleVisitedFlag(flags.png);
    }
  };
  return (
    <div className="Country">
      <img src={flags.png} alt="" />
      <h3>{name?.common} </h3>
      <h4>Population: {population} </h4>
      <h4>Region: {region}</h4>
      <h4>Capital: {capital} </h4>

      <button
        onClick={handleVisited}
        className={`visited-btn ${visited ? "visited" : ""}`}
        disabled={visited}
      >
        {visited ? "Visited" : "Visit Me"}
      </button>
    </div>
  );
};

export default Country;
