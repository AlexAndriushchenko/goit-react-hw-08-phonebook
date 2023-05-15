import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { value: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: { ...filterInitialState },
  reducers: {
    setFilter(state, { payload }) {
      state.value = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
