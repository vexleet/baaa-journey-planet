//Made by Valentinas Markulis
import SearchBar from '../../components/SearchBar';
import { getPins } from './services/pins.js';
import { useEffect, useState } from 'react';
import Toggler from '../../components/Toggler';
import PinCard from './components/PinCard/index.jsx';
import TextField from '../../components/TextField/TextField';
import LoadingScreen from '../components/LoadingScreen/index.jsx';
import './index.styles.css';

const categories = ['restaurant', 'bar'];

const Discover = () => {
  const [originalPins, setOriginalPins] = useState([]);
  const [filteredPins, setFilteredPins] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const displayTogglerItems = ['Pings', 'People'];
  const [displayPar, setDisplayPar] = useState(displayTogglerItems[0]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const pinsResponse = await getPins();

      if (pinsResponse === false) {
        <p>Server side error, please refresh</p>;
      } else {
        setOriginalPins(pinsResponse);
        setFilteredPins(pinsResponse);
      }
      setLoading(false);
    })();
  }, []);

  const renderFilteredPins = (category, styles) => {
    return (
      <div style={{ ...styles }}>
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
    );
  };

  return (
    <>
      {loading === false ? (
        <main className="discover-wrapper">
          <div className="searchHeader">
            <SearchBar
              placeholder="Search..."
              originalPins={originalPins}
              setFilteredPins={setFilteredPins}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />

            <button className="filterBtn">
              <img src="../src/assets/icons/filter.svg"></img>
            </button>
          </div>
          <div className="discover-toggler">
            <Toggler
              items={displayTogglerItems}
              setActiveItem={setDisplayPar}
              activeItem={displayPar}
            />
          </div>

          {displayPar === displayTogglerItems[1] && (
            <div className="comingsoon-wrapper">
              <div className="comingsoon-header">
                <img src="../src/assets/icons/confettileft.svg" alt="Confetti Celebration Left" />
                <h2>COMING SOON!</h2>
                <img src="../src/assets/icons/confettiright.svg" alt="Confetti Celebration Right" />
              </div>
              <p>If you want to be up-to-date with new features coming, get notified!</p>
              <TextField
                id="notify"
                className="textfield-emailNotify"
                placeholder={'email@mail.com'}
                type="text"
              />
              <div className="notifyme-button">
                <button>Notify</button>
              </div>
            </div>
          )}

          {displayPar === displayTogglerItems[0] && filteredPins.length > 0 && (
            <div>
              {!selectedCategory ? (
                categories.map((category, i) => (
                  <div key={i} style={{ height: '100%' }}>
                    {!searchInput && (
                      <button
                        className="categoryBtn text"
                        onClick={() => setSelectedCategory(categories[i])}>
                        {category}
                      </button>
                    )}
                    {searchInput ? (
                      <div className="dataResult">{renderFilteredPins(category, {})}</div>
                    ) : (
                      <div className="dataResult">
                        {renderFilteredPins(category, {
                          display: 'flex',
                          flexDirection: 'row',
                          flexWrap: 'no-wrap'
                        })}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div style={{ height: '100%' }}>
                  {!searchInput && (
                    <button
                      className="categoryBtn text"
                      onClick={() => setSelectedCategory(selectedCategory)}>
                      {selectedCategory}
                    </button>
                  )}
                  <div className="dataResult">{renderFilteredPins(selectedCategory, {})}</div>
                </div>
              )}
            </div>
          )}
        </main>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Discover;
