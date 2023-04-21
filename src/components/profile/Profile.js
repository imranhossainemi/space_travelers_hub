import React from 'react';
import MissionJoin from '../mission/MissionJoin';
import './Profile.css';
import ProfileRocket from '../../Components/profile/ProfileRocket';

const Profile = () => (
  <div className="main-container">
    <MissionJoin />
    <ProfileRocket />
  </div>
);

export default Profile;
