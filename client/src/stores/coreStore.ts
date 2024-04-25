import { createSlice } from '@reduxjs/toolkit';

const coreSlice = createSlice({
  name: 'user',
  initialState: { 
    isSearching: false,
    isLoading: true
   },
  reducers: {
    setPrefs: (state, action) => {
      // return new state
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    }
  },
});

export const { setPrefs, setIsLoading } = coreSlice.actions;

export default coreSlice.reducer;