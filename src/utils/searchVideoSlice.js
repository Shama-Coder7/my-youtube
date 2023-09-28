import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  text: '',
};
const searchVideoSlice = createSlice({
  name: 'SearchVideo',
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state.id = action.payload;
    },
    searchText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { addDetails, searchText } = searchVideoSlice.actions;
export default searchVideoSlice.reducer;
