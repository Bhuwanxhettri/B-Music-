import { configureStore } from '@reduxjs/toolkit'
import atuhReducer from './authSlice'
import playerReducer from './features/playerSlice';

export const store = configureStore({
    reducer: {
      auth: atuhReducer,
      player: playerReducer, 
    },
  })