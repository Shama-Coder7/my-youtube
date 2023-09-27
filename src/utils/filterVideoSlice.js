import { createSlice } from '@reduxjs/toolkit';

const filterVideoSlice = createSlice({
  name: 'filterVideo',
  initialState: {
    id: '',
    text: '',
  },
  reducers: {
    addDetails: (state, action) => {
      state.id = action.payload;
    },
    searchText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { addDetails, searchText } = filterVideoSlice.actions;

export default filterVideoSlice.reducer;
