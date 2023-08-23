import React, { useEffect } from 'react';
import ProfileRocket from './ProfileRocket';
import MissionJoin from './MissionJoin';
import './Profile.css';

const Profile = () => {
  useEffect(() => {
    document.title = 'Profile';
  }, []);

  return (
    <div className="main-container">
      <ProfileRocket />
      <MissionJoin />
    </div>
  );
};

export default Profile;
