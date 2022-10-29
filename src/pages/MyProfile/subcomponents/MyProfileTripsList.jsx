import PropTypes from 'prop-types';
import SmallPinCard from '@/components/SmallPinCard/index.jsx';
import CreateTrip from '@/components/CreateTrip/index.jsx';
import { useState } from 'react';

const MyProfileTripsList = ({ trips }) => {
  const [addTripIsOpen, setAddTripIsOpen] = useState(false);

  const tripsList = () => {
    return trips.map((trip, index) => (
      <SmallPinCard
        image={trip.image}
        title={trip.country}
        subtitle={`${trip.startDate}-${trip.endDate}`}
        key={trip.id + index}
      />
    ));
  };

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
        {tripsList()}
      </div>

      <CreateTrip isVisible={addTripIsOpen} setIsVisible={setAddTripIsOpen} />
    </>
  );
};

MyProfileTripsList.propTypes = {
  trips: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      country: PropTypes.string,
      city: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string
    })
  )
};

export default MyProfileTripsList;
