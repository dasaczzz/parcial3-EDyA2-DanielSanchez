import { configureStore } from "@reduxjs/toolkit";
import { citiesSlice } from "./slices/citiesSlice";

  export const store = configureStore({
  reducer: {
    cities: citiesSlice.reducer
  }
})