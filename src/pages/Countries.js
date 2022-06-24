import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCountries } from '../redux/AllCountries';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CountryList from '../components/CountryList';

export default function Countries() {
  const allState = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const filteredCountries = allState.data.filter((country) => country.name.common.includes(query));
  return (
    <div className="h-full">
      <Header />
      <div className="p-10 md:p-20">
        <SearchBar onChange={handleChange} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 w-full">
          {!allState.pending && <CountryList countries={filteredCountries} />}
        </div>
      </div>
    </div>
  );
}
