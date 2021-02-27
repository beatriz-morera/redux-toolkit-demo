import { configureStore } from '@reduxjs/toolkit';
import auth from './slices/auth';
import citizens from './slices/citizens';

import { fetchCitizens } from './actions';

const store = configureStore({
  reducer: {
    citizens,
    auth,
  },
});

store.dispatch(fetchCitizens());

export default store;
