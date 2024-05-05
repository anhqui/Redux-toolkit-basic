import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    loggedIn: false
  }

const logSlice = createSlice({
  name: 'logged',
  initialState,
  reducers: {
    signIn(state) {
        state.loggedIn = true
    },
    signOut(state) {
        state.loggedIn = false
    },
  },
})

export const { signIn, signOut } = logSlice.actions
export default logSlice.reducer