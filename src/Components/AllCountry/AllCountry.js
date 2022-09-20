import React, { useEffect, useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';
import './AllCountry.css';

const AllCountry = () => {
  const [countries, setCountries] = useState([]);
  console.log(countries);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1 className="text-center pt-4 pb-3 ">Rest Countries API</h1>
      <div className="container">
        <div className="country-container">
          {countries.map((country, index) => (
            <SingleCountry key={index} country={country}></SingleCountry>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCountry;
