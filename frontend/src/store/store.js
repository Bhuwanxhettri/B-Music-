import { configureStore } from '@reduxjs/toolkit'
import atuhReducer from './authSlice'
import commentReducer from './commentSlice';
import playerReducer from './features/playerSlice';

export const store = configureStore({
    reducer: {
      auth: atuhReducer,
      comment:commentReducer,
      player: playerReducer, 
    },
  })