import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    isLoggedIn:localStorage.getItem("login")
  }
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
      localStorage.setItem("login", true);
    },
    logout: (state) => {
      state.isLoggedIn = false
      localStorage.setItem("login", false);
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout} = authSlice.actions
export default authSlice.reducer