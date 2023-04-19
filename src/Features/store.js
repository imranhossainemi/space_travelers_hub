import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/missionsSlice';

const store = configureStore({
  reducer: {
    mission: missionsReducer,
  },
});

export default store;
