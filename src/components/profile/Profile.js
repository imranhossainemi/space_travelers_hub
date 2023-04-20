import React from 'react';
import MissionJoin from '../mission/MissionJoin';
import './Profile.css';
import ProfileRocket from './ProfileRocket'; // eslint-disable-line import/extensions

const Profile = () => (
  <div className="main-container">
    <MissionJoin />
    <ProfileRocket />
  </div>
);

export default Profile;
