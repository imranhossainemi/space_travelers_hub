import React from 'react';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../Features/Rockets/rocketsSlice';

const Card = (prop) => {
  const {
    name, description, image, id, reserve,
  } = prop;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(reserveRocket(id));
  };
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="Falcon 1" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">
          {reserve ? <span className="reserved">Reserved</span> : ''}
          {' '}
          {description}
        </p>
        {reserve ? <button className="cancel-reservation" type="button" onClick={() => handleClick(id)}>Cancel Reservation</button> : <button id={id} onClick={() => handleClick(id)} className="card-button" type="button">Reserve Rocket</button>}
      </div>
    </div>
  );
};

export default Card;
