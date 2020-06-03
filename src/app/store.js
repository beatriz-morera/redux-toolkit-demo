import { configureStore } from '@reduxjs/toolkit';
import * as citizens from '../features/citizens/citizensSlice';

export default configureStore({
  reducer: {
    citizens: citizens.reducer,
  },
});
