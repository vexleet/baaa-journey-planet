import PropTypes from 'prop-types';
import React, { useState } from 'react';
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
        <input type="text" placeholder={placeholder} value={fieldFilled} onChange={handleFilter} />
        <div className="searcIcon">
          {filteredData.length === 0 ? (
            <img src="" />
          ) : (
            <img id="clearBtn" onClick={clearInput} src="" />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return <p key={key}>{value.name}</p>;
          })}
        </div>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  data: PropTypes.node.isRequired
};

export default SearchBar;
