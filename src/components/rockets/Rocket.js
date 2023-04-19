import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './rocket.css';
import Card from './Card';
import { fetchRockets } from '../../Features/Rockets/rocketsSlice';

const Rocket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  const { rockets } = useSelector((state) => state.rockets);
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
          />
        ))}
      </div>
    </section>
  );
};

export default Rocket;
