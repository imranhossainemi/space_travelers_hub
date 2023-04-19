import React from 'react';
import './rocket.css';
import Card from './Card';

const Rocket = () => (
  <section className="rocket">
    <div className="card-container">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </section>
);

export default Rocket;
