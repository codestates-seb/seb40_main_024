import { createSlice } from '@reduxjs/toolkit';

export const titleSlice = createSlice({
  name: 'title',
  initialState: {
    title: '명칭',
  },
  reducers: {
    titleName: (state) => {
      state.name;
    },
    setTitleName: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { title, setTitleName } = titleSlice.actions;

export default titleSlice.reducer;
