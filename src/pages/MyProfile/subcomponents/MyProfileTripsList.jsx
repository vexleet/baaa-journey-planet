import PropTypes from 'prop-types';
import SmallCard from '@/src/components/SmallCard/index.jsx';
import CreateTrip from '@/src/components/CreateTrip/index.jsx';
import { useState } from 'react';
import MyProfileTabLayout from '@/src/pages/MyProfile/subcomponents/MyProfileTabLayout.jsx';
import { Link } from 'react-router-dom';

const MyProfileTripsList = ({ trips, onAddTrip }) => {
  const [loading, setLoading] = useState(false);

  const [addTripIsOpen, setAddTripIsOpen] = useState(false);

  const tripsList = () => {
    return trips.map((trip, index) => (
      <Link key={trip.id + index} to={`/plan-trip/${trip.id}`} style={{ textDecoration: 'none' }}>
        <SmallCard
          image={trip.image}
          title={trip.name}
          subtitle={`${trip.startDate}\n${trip.endDate}`}
        />
      </Link>
    ));
  };

  const openAddPin = () => setAddTripIsOpen(true);

  const handleAddTripSuccess = async () => {
    setLoading(true);
    await onAddTrip();
    setLoading(false);
  };

  return (
    <>
      <MyProfileTabLayout
        items={trips}
        handleAddSuccess={handleAddTripSuccess}
        handleOpenAddItem={openAddPin}
        loading={loading}
        renderChildren={tripsList}
      />

      <CreateTrip
        isVisible={addTripIsOpen}
        setIsVisible={setAddTripIsOpen}
        handleSuccess={onAddTrip}
      />
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
  ),
  onAddTrip: PropTypes.func
};

export default MyProfileTripsList;
