import { createSlice } from '@reduxjs/toolkit'

export const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    cities: [],
  },
  reducers: {
    addCity: (state) => {
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCitie } = citiesSlice.actions