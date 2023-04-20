import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/missionsSlice';
import rocketReducer, { fetchRockets } from './Rockets/rocketsSlice';

export const store = configureStore({
  reducer: {
    mission: missionsReducer,
    rockets: rocketReducer,
  },
});

store.dispatch(fetchRockets());
export default store;
