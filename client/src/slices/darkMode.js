import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode: false,
    loading: false,
    hasError: false
}

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    getDarkMode: (state) => {
      state.loading = true
    },
    getDarkModeSuccess: (state,{payload}) => {
      state.darkMode = payload
      state.loading = false
      state.hasError =false
    },
    getDarkModeFailuer: (state) => {
        state.loading = false
        state.hasError = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { getDarkMode, getDarkModeSuccess, getDarkModeFailuer } = darkModeSlice.actions
export const darkModeSliceSelector = (state)=> state.darkMode
export default darkModeSlice.reducer;