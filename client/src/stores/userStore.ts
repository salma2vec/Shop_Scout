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
  },
});

export const { setPreferedTheme } = userSlice.actions;

export default userSlice.reducer;