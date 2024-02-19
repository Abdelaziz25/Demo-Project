import { createSlice } from '@reduxjs/toolkit';
import {fetchCourses} from '../thunks/api'
// Define the initial state
const initialState = {
  courses: [],
  status: 'idle',
  error: null,
};

// Create the course slice
const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export const courseReducer = courseSlice.reducer;
