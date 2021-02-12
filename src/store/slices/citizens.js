import { createSlice, createSelector } from '@reduxjs/toolkit';

import { fetchCitizens } from '../actions';


function findMin(arr, property){
  if (arr.length === 0) {
    return undefined;
  }
  return Math.min(...arr.map((item) => item[property]))
}

function findMax(arr, property){
  if (arr.length === 0) {
    return undefined;
  }
  return Math.max(...arr.map((item) => item[property]))
}

const slice = createSlice({
  name: 'citizens',
  initialState: {
    list: [],
    loading: false,
    error: null,
    term: '',
    filters: {},
    selected: null
  },
  reducers: {
    filter: (state, action) => {
      state.term = action.payload;
    },
    select: (state, action) => {
      state.selected = action.payload;
    },
    applyFilters: (state, action) => {
      state.filters = action.payload
    }
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

export const { filter, select, applyFilters } = slice.actions;

export const selectState = (store) => store.citizens;
export const selectLoading = createSelector(selectState, (c) => c.loading);
export const selectCitizens = createSelector(selectState, (c) => c.list);

export const selectMinAge = createSelector(selectState, (c) => findMin(c.list, "age"));
export const selectMaxAge = createSelector(selectState, (c) => findMax(c.list, "age"));

export const selectMinHeight = createSelector(selectState, (c) => findMin(c.list, "height"));
export const selectMaxHeight = createSelector(selectState, (c) => findMax(c.list, "height"));

export const selectMinWeight = createSelector(selectState, (c) => findMin(c.list, "weight"));
export const selectMaxWeight = createSelector(selectState, (c) => findMax(c.list, "weight"));


export const selectSearchTerm = createSelector(selectState, (c) => c.term);
export const selectFilters = createSelector(selectState, (c) => c.filters)


export const selectFilteredCitizens = createSelector(
  selectCitizens,
  selectSearchTerm,
  selectFilters,
  (citizens, term, filters) => {
    const {minAge, maxAge, minHeight, maxHeight, minWeight, maxWeight} = filters



    return citizens
      .filter((c) => minAge ? filters.minAge <= c.age : c)
      .filter((c) => maxAge ? filters.maxAge >= c.age : c)
      .filter((c) => minHeight ? filters.minHeight <= c.height : c)
      .filter((c) => maxHeight ? filters.maxHeight >= c.height : c)
      .filter((c) => minWeight ? filters.minWeight <= c.weight : c)
      .filter((c) => maxWeight ? filters.maxWeight >= c.weight : c)
      .filter((c) => term ? c.name.toLowerCase().includes(term.toLowerCase()) : c)
        
    
    
  }
);

export const selectSelected = createSelector(selectState, (c) => c.selected);

export default slice.reducer;
