import React from 'react';
import CountriesList from '../components/CountriesList';
import continent from '../assets/world-map.jpg';

const Countries = () => (
  <>
    <img src={continent} alt="Continents in the world" className="home-bg" />
    <div className="title-box flex">
      <h1>Europe</h1>
      <h2>Air Pollution Stats</h2>
      <span>2023</span>
    </div>
    <CountriesList />
  </>
);

export default Countries;
