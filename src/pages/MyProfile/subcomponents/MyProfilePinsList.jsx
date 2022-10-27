import PropTypes from 'prop-types';
import SmallPinCard from '@/components/SmallPinCard/index.jsx';

const MyProfilePinsList = ({ pins }) => {
  const pinsList = () => {
    return pins.map((pin, index) => (
      <SmallPinCard
        image={pin.images[0]}
        title={pin.name}
        subtitle={pin.location}
        key={pin.id + index}
      />
    ));
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
      {pinsList()}
    </div>
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
  ).isRequired
};

export default MyProfilePinsList;
