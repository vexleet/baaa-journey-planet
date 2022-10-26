import './index.styles.css';
import PropTypes from 'prop-types';

const SearchBar = ({ search }) => {
  return (
    <div>
      <input type="text" className="searchInput" onInput="searchResult()" placeholder="Search">
        {search}
      </input>
    </div>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string.isRequired
};
export default SearchBar;
