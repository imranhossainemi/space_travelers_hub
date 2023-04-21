/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import ProfileRocket from '../../components/profile/ProfileRocket';
import MissionJoin from '../mission/MissionJoin';
import './Profile.css';

const Profile = () => (
  <div className="main-container">
    <MissionJoin />
    <ProfileRocket />
  </div>
);

export default Profile;
