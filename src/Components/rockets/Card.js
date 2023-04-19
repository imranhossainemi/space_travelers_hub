import React from 'react';

const Card = (prop) => {
  const {
    name, description, image, id,
  } = prop;
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="Falcon 1" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{description}</p>
        <button id={id} className="card-button" type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Card;
