import React from 'react';
import { useSelector } from 'react-redux';
import '../Styles/MissionJoin.css';

const MissionJoin = () => {
  const joinedMissions = useSelector((state) => {
    const { missions } = state.mission;
    const { joinMission } = state.mission;
    return missions.filter(
      (mission) => joinMission[mission.mission_id] === true,
    );
  });

  return (
    <div className="missions">
      <h2>My Missions</h2>
      <ul className="joined-missions-list">
        {joinedMissions.map((mission) => (
          <li className="list-item" key={mission.mission_id}>
            {mission.mission_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MissionJoin;
