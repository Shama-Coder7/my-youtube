import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import filterVideoSlice from './filterVideoSlice';

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    filterVideo: filterVideoSlice,
  },
});

export default store;
