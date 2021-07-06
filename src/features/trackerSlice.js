import { createSlice } from "@reduxjs/toolkit";

export const trackerSlice = createSlice({
  name: "tracker",
  initialState: {
    isTracking: false,
    data: [],
    currentSession: null,
    totalTime: 0,
  },
  reducers: {
    toggle: (state) => {
      // toggle state
      state.isTracking = !state.isTracking;

      const { isTracking, currentSession } = state;

      // end session
      if (!isTracking) {
        const sessionStart = currentSession?.start;
        if (sessionStart) {
          const sessionEnd = Date.now();
          const sessionDuration =
            Math.round((sessionEnd - sessionStart) / 1000) * 1000; //round each value to seconds to avoid incorrect data due to ms difference
          state.data.push({
            ...currentSession,
            end: sessionEnd,
            duration: sessionDuration,
          });
          state.currentSession = null;
          state.totalTime += sessionDuration;
        }
        // start session
      } else {
        state.currentSession = { start: Date.now() };
      }
    },
  },
});

export const { toggle } = trackerSlice.actions;

export default trackerSlice.reducer;
