import { createSlice } from '@reduxjs/toolkit';

const coreSlice = createSlice({
  name: 'user',
  initialState: { 
    isSearching: false,
   },
  reducers: {
    setPrefs: (state, action) => {
      // return new state
    }
  },
});

// Export the generated reducer function
export default coreSlice.reducer;