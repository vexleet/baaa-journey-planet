import SearchBar from '../../components/SearchBar';
import { getPins } from '@/services/pins.js';
import { useEffect, useState } from 'react';
import PinCard from '../../components/Card';

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
      }
    })();
  }, []);

  return (
    <main>
      <SearchBar
        placeholder="Search..."
        originalPins={originalPins}
        setFilteredPins={setFilteredPins}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      {filteredPins.length > 0 && searchInput && (
        <div>
          {categories.map((category, i) => {
            return (
              <div key={i} style={{ height: '100%' }}>
                <h2>{category}</h2>
                <div className="dataResult">
                  {[...filteredPins]
                    .filter((val) => val.category == category)
                    .map((value, i) => {
                      return (
                        <PinCard
                          key={i}
                          image={value.images[0]}
                          name={value.name}
                          location={value.location}
                        />
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* {filteredPins.length !== 0 && searchInput && (
        <div className="dataResult">
          {filteredPins.slice(0, 15).map((value, key) => {
            return (
              <PinCard
                image={value.images[0]}
                name={value.name}
                location={value.location}
                key={key}
              />
            );
          })}
        </div>
      )} */}
    </main>
  );
};

export default Discover;
