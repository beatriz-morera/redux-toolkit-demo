import { createSlice, createSelector } from '@reduxjs/toolkit';

import { fetchCitizens } from '../actions';

const slice = createSlice({
  name: 'citizens',
  initialState: {
    list: [],
    loading: false,
    error: null,
    term: '',
    selected: null,
  },
  reducers: {
    filter: (state, action) => {
      state.term = action.payload;
    },
    select: (state, action) => {
      state.selected = action.payload;
    },
  },
  extraReducers: {
    [fetchCitizens.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchCitizens.fulfilled]: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    [fetchCitizens.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { filter, select } = slice.actions;

export const selectState = (store) => store.citizens;
export const selectLoading = createSelector(selectState, (c) => c.loading);
export const selectCitizens = createSelector(selectState, (c) => c.list);

export const selectSearchTerm = createSelector(selectState, (c) => c.term);

export const selectFilteredCitizens = createSelector(
  selectCitizens,
  selectSearchTerm,
  (citizens, term) => {
    if (!term) {
      return citizens;
    }
    return citizens.filter((c) => c.name.toLowerCase().includes(term.toLowerCase()));
  }
);

export const selectSelected = createSelector(selectState, (c) => c.selected);

export default slice.reducer;
