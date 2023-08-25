import React from 'react';
import { useSelector } from 'react-redux';

const ProfileRocket = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserve === true);
  return (
    <div className="rokect-reserved">
      <h2>Rocket Reserved</h2>
      <div className="rocket-reserved-container">
        <ul className="joined-missions-list">
          {reservedRockets.map((rocket) => <li key={rocket.id} className="list-item">{rocket.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default ProfileRocket;
