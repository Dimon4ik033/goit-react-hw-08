import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  filter: '',
};

const sliceFilter = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = sliceFilter.reducer;
export const { changeFilter } = sliceFilter.actions;
