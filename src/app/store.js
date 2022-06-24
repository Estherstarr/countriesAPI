import { configureStore } from '@reduxjs/toolkit';
import fetchAllReducerSlice from '../redux/AllCountries';

const store = configureStore({
  reducer: {
    allCountries: fetchAllReducerSlice,
  },
});

export default store;
