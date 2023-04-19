import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsAsync } from '../Features/Missions/missionsSlice';
import MissionItems from './MissionItems';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.mission);

  useEffect(() => {
    dispatch(getMissionsAsync());
  }, [dispatch]);

  return (
    <>
      <table className="table">
        <tbody>
          <tr>
            <th className="small-column">Mission</th>
            <th className="big-column">Description</th>
            <th className="small-column">Status</th>
          </tr>
          {missions.map((mission) => (
            <MissionItems
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Missions;
