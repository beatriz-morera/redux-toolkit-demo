import { createAsyncThunk } from '@reduxjs/toolkit';
import * as citizens from '../services/citizens';

export const fetchCitizens = createAsyncThunk('fetch/citizens', citizens.fetchAll);
