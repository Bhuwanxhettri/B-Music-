import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    comments:[]
  }
export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    userComment: (state,action) => {
       state.comments.push(action.payload)
    }

  },
})

// Action creators are generated for each case reducer function
export const { userComment} = commentSlice.actions
export default commentSlice.reducer