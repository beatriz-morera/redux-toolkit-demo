import { createSlice, createSelector } from '@reduxjs/toolkit';

const STORAGE_KEY = 'user';

function loadInitialState() {
  const json = localStorage.getItem(STORAGE_KEY);
  if (json) {
    return JSON.parse(json);
  }
  return {
    user: {},
  };
}

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: loadInitialState(),
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.user));
    },
  },
});

export const { login } = slice.actions;

export const selectState = (store) => store.auth;

export const selectAuth = createSelector(selectState, (el) => el.user);

export default slice.reducer;
