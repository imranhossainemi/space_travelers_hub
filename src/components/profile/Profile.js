import React from 'react';
import ProfileRocket from './ProfileRocket';
import MissionJoin from '../mission/MissionJoin';
import './Profile.css';

const Profile = () => (
  <div className="main-container">
    <MissionJoin />
    <ProfileRocket />
  </div>
);

export default Profile;
