import { useEffect, useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
  };

  return (
    <div>
      <h1>component {countries.length} </h1>

      <div className="flag-container">
        {visitedFlag.map((flag, index) => (
          <img key={index} src={flag} alt={`Flag ${index}`} />
        ))}
      </div>

      {/* Display Country */}
      <div className="Country-Container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedFlag={handleVisitedFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
