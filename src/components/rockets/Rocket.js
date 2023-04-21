/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import './rocket.css';
import loading from '../../images/loading.gif';

const Rocket = () => {
  const { rockets, isLoading, hasError } = useSelector((state) => state.rockets);
  if (isLoading) {
    return (
      <div className="loader">
        <img src={loading} alt="loading" />
      </div>
    );
  }
  if (hasError) {
    return (
      <div className="error">
        <p className="single-error">Oops, something went wrong!</p>
      </div>
    );
  }
  return (
    <section className="rocket">
      <div className="card-container">
        {rockets.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            id={item.id}
            description={item.description}
            image={item.flickr_images[0]}
            reserve={item.reserve}
          />
        ))}
      </div>
    </section>
  );
};

export default Rocket;
