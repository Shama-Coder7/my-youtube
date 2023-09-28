import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import chatSlice from './chatSlice';
import searchVideoSlice from './searchVideoSlice';

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    searchVideo: searchVideoSlice,
    chat: chatSlice,
  },
});

export default store;
