import React from 'react';

const Card = () => (
  <div className="card">
    <div className="card-image">
      <img src="https://images.unsplash.com/photo-1628126235206-5260b9ea6441?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhY2VzaGlwfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="Falcon 1" />
    </div>
    <div className="card-content">
      <h2 className="card-title">Falcon 1</h2>
      <p className="card-text">The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fueled launch vehicle to go into orbit around the Earth.</p>
      <button className="card-button" type="button">Reserve Rocket</button>
    </div>
  </div>
);

export default Card;
