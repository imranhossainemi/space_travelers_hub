/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleJoinMission } from '../Features/Missions/missionsSlice';

const MissionItems = (props) => {
  const dispatch = useDispatch();
  const joinMission = useSelector(
    (state) => state.mission.joinMission[props.id],
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
      <td className="mission-name">{props.name}</td>
      <td>{props.description}</td>
      <td>
        <span className={`membership-status ${membershipStatusClassName}`}>
          {joinMission ? 'Active Member' : 'NOT A MEMBER'}
        </span>
      </td>
      <td>
        <button
          type="button"
          onClick={() => handleJoinMission(props.id)}
          className={`joinMission-action ${joinMissionStatusClassnName}`}
        >
          {joinMission ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

export default MissionItems;
