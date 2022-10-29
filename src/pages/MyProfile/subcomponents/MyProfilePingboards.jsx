import { useState } from 'react';
import CreatePingboard from '@/components/CreatePingboard/index.jsx';
import EmptyPageState from '@/components/EmptyPageState/index.jsx';
import PropTypes from 'prop-types';
import Pingboard from '@/components/Pingboard/index.jsx';

const MyProfilePingboards = ({ pingboards }) => {
  const [addPingBoardIsOpen, setAddPingBoardIsOpen] = useState(false);

  const getPingboardPinsImages = (pins) => {
    return pins.map((pin) => pin.images[0]);
  };

  return (
    <>
      {pingboards.length === 0 ? (
        <EmptyPageState
          text="You have no pingboards yet. Why don't you create one?"
          onButtonClick={() => setAddPingBoardIsOpen(true)}
          buttonLabel="Create pingboard"
        />
      ) : (
        pingboards.map((pingboard) => (
          <Pingboard
            key={pingboard.id}
            images={getPingboardPinsImages(pingboard.pins)}
            name={pingboard.name}
          />
        ))
      )}

      <CreatePingboard setIsVisible={setAddPingBoardIsOpen} isVisible={addPingBoardIsOpen} />
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
  )
};

export default MyProfilePingboards;
