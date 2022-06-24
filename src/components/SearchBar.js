import React from 'react';
import { PropTypes } from 'prop-types';

function SearchBar({ onChange }) {
  return (
    <div className="mb-10 flex flex-col gap-y-3 md:flex-row justify-between ">
      <input
        type="text"
        className="w-160 md:w-80 rounded p-2 shadow-lg "
        placeholder="Search for a country"
        onChange={onChange}
      />
    </div>
  );
}
SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default SearchBar;
