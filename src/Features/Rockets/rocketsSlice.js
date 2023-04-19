import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const url = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  isLoading: false,

};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async (thunkAPI) => {
  try {
    const response = await axios('https://api.spacexdata.com/v4/rockets');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const allRockets = action.payload;
      const newRockets = [];
      allRockets.forEach((item) => newRockets.push({
        id: item.id,
        name: item.name,
        description: item.description,
        flickr_images: item.flickr_images,
      }));
      state.isLoading = false;
      state.rockets = newRockets;
    });
    builder.addCase(fetchRockets.rejected, (state) => {
      state.isLoading = false;
    });
  },

});

export default rocketsSlice.reducer;
