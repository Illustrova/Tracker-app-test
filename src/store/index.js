import { configureStore } from "@reduxjs/toolkit";
import trackerReducer from "../features/trackerSlice";

export default configureStore({
  reducer: {
    tracker: trackerReducer,
  },
});
