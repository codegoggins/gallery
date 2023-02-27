import { createSlice } from '@reduxjs/toolkit';

const textSlice = createSlice({
  name: 'text',
  initialState: '',
  reducers: {
    setTextValue: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTextValue } = textSlice.actions;
export default textSlice.reducer;