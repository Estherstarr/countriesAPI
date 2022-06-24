import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryInfo from './pages/CountryInfo';
import Countries from './pages/Countries';

function App() {
  return (
    <div className="bg-[#4369b2]  font-nunito text-[#111517]">
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="countryInfo/:name" element={<CountryInfo />} />
      </Routes>
    </div>
  );
}

export default App;
