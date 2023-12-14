import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.js";

export const counterStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
