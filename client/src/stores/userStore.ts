import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false, 
    preferedTheme: 'light',
   },
  reducers: {
    setPreferedTheme: (state, action) => {
      state.preferedTheme = action.payload;
    },
    logUserIn: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
    }
  },
});

export const { setPreferedTheme, logUserIn } = userSlice.actions;

export default userSlice.reducer;