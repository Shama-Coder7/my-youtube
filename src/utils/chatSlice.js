import { createSlice } from '@reduxjs/toolkit';
import { LIVE_CHAT_COUNT } from './constants';

const chatSlice = createSlice({
  name: 'Chat',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT, 1); // after 17 messages one message from top gets deleted. this is how we can fix our code from lacking or exploding.
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
