import { configureStore } from '@reduxjs/toolkit';
import citizens from './slices/citizens';

import { fetchCitizens } from './actions';

const store = configureStore({
  reducer: {
    citizens,
  },
});

store.dispatch(fetchCitizens());

export default store;
