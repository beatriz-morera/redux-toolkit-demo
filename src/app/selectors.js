import * as citizens from '../features/citizens/citizensSlice';

export const selectCitizens = (state) => citizens.selectCitizens(state.citizens);
