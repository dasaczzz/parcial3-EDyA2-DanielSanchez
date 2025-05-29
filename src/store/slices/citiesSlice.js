import { createSlice } from '@reduxjs/toolkit'
import { cities } from '../../lib/sampleData'

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    cities,
  },
  reducers: {
    addCity: (state, {payload}) => {
      state.cities.nodes.push(payload.city);
      state.cities.links.push(...payload.links);
    },
    removeCity: (state, { payload }) => {
      const cityId = payload;
      state.cities.nodes = state.cities.nodes.filter(city => city.id !== cityId);
      state.cities.links = state.cities.links.filter(
        link => link.source !== cityId && link.target !== cityId
      );
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCity, removeCity } = citiesSlice.actions