import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './rocket.css';
import Card from './Card';
import { fetchRockets } from '../../Features/Rockets/rocketsSlice';
import loading from '../../images/loading.gif';

const Rocket = () => {
  const { rockets, isLoading } = useSelector((state) => state.rockets);
  console.log('isLoading:', isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  if (isLoading) {
    return (
      <div className="loader">
        <img src={loading} alt="loading" />
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
