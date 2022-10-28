import PropTypes from 'prop-types';
import React from 'react';
import TextField from '../TextField/TextField';
import './index.styles.css';

function SearchBar({ placeholder, originalPins, setFilteredPins, searchInput, setSearchInput }) {
  const handleFilter = (event) => {
    const wordEntered = event.target.value;
    setSearchInput(wordEntered);

    const newFilter = originalPins.filter((value) => {
      return value.name.toLowerCase().includes(wordEntered.toLowerCase());
    });

    setFilteredPins(newFilter);
  };

  const clearInput = () => {
    setSearchInput('');
  };

  return (
    <div className="search">
      <div className="searchInput">
        <TextField
          id="search"
          className="textfield-input"
          onChange={handleFilter}
          onClear={clearInput}
          value={searchInput}
          placeholder={placeholder}
          type="search"
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  originalPins: PropTypes.array,
  setFilteredPins: PropTypes.func,
  searchInput: PropTypes.array,
  setSearchInput: PropTypes.func
};

export default SearchBar;
