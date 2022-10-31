import { useState } from 'react';
import CreatePingboard from '@/components/CreatePingboard/index.jsx';
import PropTypes from 'prop-types';
import Pingboard from '@/components/Pingboard/index.jsx';
import MyProfileTabLayout from '@/pages/MyProfile/subcomponents/MyProfileTabLayout.jsx';

const MyProfilePingboards = ({ pingboards, onAddPingboards }) => {
  const [loading, setLoading] = useState(false);

  const [addPingBoardIsOpen, setAddPingBoardIsOpen] = useState(false);

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

  const openAddPingboard = () => setAddPingBoardIsOpen(true);

  const handleAddPingboardSuccess = async () => {
    setLoading(true);
    await onAddPingboards();
    setLoading(false);
  };

  return (
    <>
      <MyProfileTabLayout
        items={pingboards}
        handleAddSuccess={handleAddPingboardSuccess}
        handleOpenAddItem={openAddPingboard}
        loading={loading}
        renderChildren={renderPingboardItems}
      />

      <CreatePingboard
        setIsVisible={setAddPingBoardIsOpen}
        isVisible={addPingBoardIsOpen}
        handleSuccess={handleAddPingboardSuccess}
      />
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
