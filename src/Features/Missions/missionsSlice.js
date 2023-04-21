import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMissionsAsync = createAsyncThunk(
  'missions/getMissionsAsync',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    if (response.ok) {
      const data = await response.json();
      const missions = data;
      return missions;
    }
    return null;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    joinMission: {},
  },
  reducers: {
    toggleJoinMission: (state, action) => {
      const { missionId } = action.payload;
      state.joinMission[missionId] = !state.joinMission[missionId];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getMissionsAsync.fulfilled, (state, action) => {
      const updatedState = state;
      const newStore = action.payload;
      updatedState.missions = newStore;
    });
  },
});

export const { toggleJoinMission } = missionsSlice.actions;

export default missionsSlice.reducer;
