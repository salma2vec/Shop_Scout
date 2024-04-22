import { combineReducers, configureStore } from '@reduxjs/toolkit';

import coreSlice from './coreStore';
import userSlice from './userStore';

const rootReducer = combineReducers({
  core: coreSlice,
  user: userSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;