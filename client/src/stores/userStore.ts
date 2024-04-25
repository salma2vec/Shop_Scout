import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    searchHistory: [],
    isLoggedIn: false, 
    preferedTheme: 'light',
    createdAt: '',
    updatedAt: ''
   },
  reducers: {
    setPreferedTheme: (state, action) => {
      state.preferedTheme = action.payload;
    },
    setUserInformation: (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.searchHistory = action.payload.searchHistory;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
    },
    logUserIn: (state, action) => {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.searchHistory = action.payload.searchHistory;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
      // state.preferedTheme = action.payload.preferedTheme;  // only using local storage for now
    },
    logUserOut: (state, action) => {
      state.isLoggedIn = false;
      state.username = '';
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
    }
  },
});

export const { setPreferedTheme, setUserInformation, logUserIn, logUserOut } = userSlice.actions;

export default userSlice.reducer;