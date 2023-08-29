// store.js
import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currencySlice";
import userReducer from "./userSlice"

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    user: userReducer,
    // Add other reducers here if needed
  },
});

export default store;
