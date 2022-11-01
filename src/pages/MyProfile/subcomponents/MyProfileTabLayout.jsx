import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen/index.jsx';
import EmptyPageState from '@/components/EmptyPageState/index.jsx';
import SearchBar from '@/components/SearchBar/index.jsx';
import Toggler from '@/components/Toggler/index.jsx';
import PropTypes from 'prop-types';

const MyProfileTabLayout = ({ renderChildren, items, handleOpenAddItem, loading }) => {
  const pingboardListToggleItems = ['Saved', 'Created'];
  const [activeToggler, setActiveToggler] = useState(pingboardListToggleItems[1]);

  const [searchInput, setSearchInput] = useState('');

  const [filteredBoards, setFilteredBoards] = useState([]);

  const getChildren = () => {
    if (searchInput) {
      return renderChildren(filteredBoards);
    } else {
      return renderChildren(items);
    }
  };

  const openAddPingboard = () => handleOpenAddItem();

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {items.length === 0 ? (
            <EmptyPageState
              text="You have no items yet. Why don't you create one?"
              onButtonClick={openAddPingboard}
              buttonLabel="Create"
            />
          ) : (
            <>
              <div style={{ width: '70%', margin: '0 auto' }}>
                <SearchBar
                  placeholder="Search"
                  originalPins={items}
                  setFilteredPins={setFilteredBoards}
                  searchInput={searchInput}
                  setSearchInput={setSearchInput}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  marginBottom: 35,
                  marginTop: 25
                }}>
                <Toggler
                  activeItem={activeToggler}
                  setActiveItem={setActiveToggler}
                  items={pingboardListToggleItems}
                />

                <button
                  className="primary-button"
                  style={{
                    margin: 0,
                    position: 'absolute',
                    top: '50%',
                    right: 20,
                    transform: 'translateY(-50%)'
                  }}
                  onClick={openAddPingboard}>
                  +
                </button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
                {getChildren()}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

MyProfileTabLayout.propTypes = {
  items: PropTypes.array,
  loading: PropTypes.bool,
  handleOpenAddItem: PropTypes.func,
  handleAddSuccess: PropTypes.func,
  renderChildren: PropTypes.func
};

export default MyProfileTabLayout;
