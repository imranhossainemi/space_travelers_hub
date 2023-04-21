import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toggleJoinMission } from '../Features/Missions/missionsSlice';
import './Missions.css';

const MissionItems = ({ id, name, description }) => {
  const dispatch = useDispatch();
  const joinMission = useSelector(
    (state) => state.mission.joinMission[id],
  );

  const handleJoinMission = (missionId) => {
    dispatch(toggleJoinMission({ missionId }));
  };

  const membershipStatusClassName = joinMission ? 'activeMember' : 'notMember';

  const joinMissionStatusClassnName = joinMission
    ? 'leaveMission'
    : 'joinMission';

  return (
    <tr className="table-row">
      <td className="mission-name">{name}</td>
      <td>{description}</td>
      <td>
        <span className={`membership-status ${membershipStatusClassName}`}>
          {joinMission ? 'Active Member' : 'NOT A MEMBER'}
        </span>
      </td>
      <td>
        <button
          type="button"
          onClick={() => handleJoinMission(id)}
          className={`joinMission-action ${joinMissionStatusClassnName}`}
        >
          {joinMission ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

export default MissionItems;

MissionItems.propTypes = {

  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,

};
