import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchAllCountries = createAsyncThunk(
  'rest-countries/countries/FETCH-ALL',
  async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const result = await response.json();
    return result;
  },
);

export const fetchAllSlice = createSlice({
  name: 'rest-countries',
  initialState: {
    data: [],
    pending: false,
    rejected: false,
  },
  reducers: {},
  extraReducers: {
    [fetchAllCountries.pending]: () => {
      const newState = {
        data: [],
        pending: true,
        rejected: false,
      };
      return newState;
    },
    [fetchAllCountries.fulfilled]: (state, action) => {
      const newState = {
        data: action.payload,
        pending: false,
        rejected: false,
      };
      return newState;
    },
    [fetchAllCountries.rejected]: () => {
      const newState = {
        data: [],
        pending: false,
        rejected: true,
      };
      return newState;
    },
  },
});
export default fetchAllSlice.reducer;
