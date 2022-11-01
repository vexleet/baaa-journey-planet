import PropTypes from 'prop-types';
import SmallCard from '@/src/components/SmallCard/index.jsx';
import MyProfileTabLayout from '@/src/pages/MyProfile/subcomponents/MyProfileTabLayout.jsx';
import { useState } from 'react';
import CreatePin from '@/src/pages/CreatePin/index.jsx';

const MyProfilePinsList = ({ pins, onAddPin }) => {
  const [loading, setLoading] = useState(false);

  const [addPinIsOpen, setAddPinIsOpen] = useState(false);

  const pinsList = () => {
    return pins.map((pin, index) => (
      <SmallCard
        image={pin.images[0]}
        title={pin.name}
        subtitle={pin.location}
        key={pin.id + index}
      />
    ));
  };

  const openAddPin = () => setAddPinIsOpen(true);

  const handleAddPinSuccess = async () => {
    setLoading(true);
    await onAddPin();
    setLoading(false);
  };

  return (
    <>
      <MyProfileTabLayout
        items={pins}
        handleAddSuccess={handleAddPinSuccess}
        handleOpenAddItem={openAddPin}
        loading={loading}
        renderChildren={pinsList}
      />

      <CreatePin
        setIsVisible={setAddPinIsOpen}
        isVisible={addPinIsOpen}
        handleSuccess={handleAddPinSuccess}
      />
    </>
  );
};

MyProfilePinsList.propTypes = {
  pins: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      address: PropTypes.string,
      category: PropTypes.string,
      coordinates: PropTypes.arrayOf(PropTypes.number),
      images: PropTypes.arrayOf(PropTypes.string)
    })
  ).isRequired,
  onAddPin: PropTypes.func
};

export default MyProfilePinsList;
