import SearchBar from '../../components/SearchBar';
import { getPins } from '@/services/pins.js';
import { useEffect, useState } from 'react';
import PinCard from '../../components/PinCard';

const categories = ['restaurant', 'bar'];

const Discover = () => {
  const [originalPins, setOriginalPins] = useState([]);
  const [filteredPins, setFilteredPins] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    (async () => {
      const pinsResponse = await getPins();

      if (pinsResponse === false) {
        <p>Server side error, please refresh</p>;
      } else {
        setOriginalPins(pinsResponse);
        setFilteredPins(pinsResponse);
      }
    })();
  }, []);

  const renderFilteredPins = (category) => {
    return [...filteredPins]
      .filter((val) => val.category == category)
      .map((value, i) => {
        return (
          <PinCard key={i} image={value.images[0]} name={value.name} location={value.location} />
        );
      });
  };

  return (
    <main>
      <SearchBar
        placeholder="Search..."
        originalPins={originalPins}
        setFilteredPins={setFilteredPins}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className="filterButton">
        <button>
          <image src=""></image>
        </button>
      </div>
      <div></div>

      {filteredPins.length > 0 && (
        <div>
          {categories.map((category, i) => {
            return (
              <div key={i} style={{ height: '100%' }}>
                {!searchInput && <h2>{category}</h2>}
                <div className="dataResult">{renderFilteredPins(category)}</div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Discover;
