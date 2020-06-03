import { createSlice } from '@reduxjs/toolkit';
import { getCitizensList } from '../../services/citizens';

export const slice = createSlice({
  name: 'citizens',
  initialState: {
    list: [],
  },
  reducers: {
    loadCitizens: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const selectCitizens = (state) => state.list;

export const { loadCitizens } = slice.actions;

export const loadCitizensList = () => (dispatch) =>
  getCitizensList().then((res) => dispatch(loadCitizens(res)));

export const reducer = slice.reducer;
