import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TextField from '../TextField/TextField';
import './index.styles.css';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [fieldFilled, setFieldFilled] = useState('');

  const handleFilter = (event) => {
    const wordEntered = event.target.value;
    setFieldFilled(wordEntered);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(wordEntered.toLowerCase());
    });

    if (wordEntered === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setFieldFilled('');
  };
  return (
    <div className="search">
      <div className="searchInput">
        <TextField
          id="search"
          className="textfield-input"
          onChange={handleFilter}
          value={fieldFilled}
          placeholder={placeholder}
          type="search"
        />
        {filteredData.length === 0 ? null : (
          <div className="searcIcon" onClick={clearInput}>
            <div className="searchClear">X</div>
          </div>
        )}
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  data: PropTypes.node.isRequired,
  handleFilter: PropTypes.array
};

export default SearchBar;
