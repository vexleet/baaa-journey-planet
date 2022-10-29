import { useState } from 'react';
import CreatePingboard from '@/components/CreatePingboard/index.jsx';
import EmptyPageState from '@/components/EmptyPageState/index.jsx';
import PropTypes from 'prop-types';
import Pingboard from '@/components/Pingboard/index.jsx';
import SearchBar from '@/components/SearchBar/index.jsx';
import LoadingScreen from '@/components/LoadingScreen/index.jsx';

const MyProfilePingboards = ({ pingboards, onAddPingboards }) => {
  const [loading, setLoading] = useState(false);

  const [addPingBoardIsOpen, setAddPingBoardIsOpen] = useState(false);

  const [searchInput, setSearchInput] = useState('');

  const [filteredBoards, setFilteredBoards] = useState([]);

  const getPingboardPinsImages = (pins) => {
    return pins.map((pin) => pin.images[0]);
  };

  const renderPingboardItems = (boards) => {
    return boards.map((pingboard) => (
      <Pingboard
        key={pingboard.id}
        images={getPingboardPinsImages(pingboard.pins)}
        name={pingboard.name}
      />
    ));
  };

  const getPingboardsList = () => {
    if (searchInput) {
      return renderPingboardItems(filteredBoards);
    } else {
      return renderPingboardItems(pingboards);
    }
  };

  const openAddPingboard = () => setAddPingBoardIsOpen(true);

  const handleAddPingboardSuccess = async () => {
    setLoading(true);
    await onAddPingboards();
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {pingboards.length === 0 ? (
            <EmptyPageState
              text="You have no pingboards yet. Why don't you create one?"
              onButtonClick={openAddPingboard}
              buttonLabel="Create pingboard"
            />
          ) : (
            <>
              <div style={{ width: '70%', margin: '0 auto' }}>
                <SearchBar
                  placeholder="Search for pingboard"
                  originalPins={pingboards}
                  setFilteredPins={setFilteredBoards}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                />
              </div>

              <button
                className="primary-button"
                style={{ marginBottom: 10, marginTop: 5 }}
                onClick={openAddPingboard}>
                Create pingboard
              </button>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
                {getPingboardsList()}
              </div>
            </>
          )}

          <CreatePingboard
            setIsVisible={setAddPingBoardIsOpen}
            isVisible={addPingBoardIsOpen}
            handleSuccess={handleAddPingboardSuccess}
          />
        </>
      )}
    </>
  );
};

MyProfilePingboards.propTypes = {
  pingboards: PropTypes.arrayOf(
    PropTypes.shape({
      createdBy: PropTypes.string,
      name: PropTypes.string,
      privacy: PropTypes.string,
      pins: PropTypes.array
    })
  ),
  onAddPingboards: PropTypes.func
};

export default MyProfilePingboards;
