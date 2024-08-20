import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./slices/jobSlices";

export default configureStore({
  reducer: jobReducer,
});
