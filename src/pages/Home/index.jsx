//Made by Valentinas Marlulis
import './index.styles.css';
import { useTokenContext } from '@/context/TokenContext.jsx';
import { useState, useEffect } from 'react';
import { getTrips } from '@/services/trip.js';
import LoadingScreen from '../../components/LoadingScreen';
import SmallCard from '@/components/SmallCard/index.jsx';

const Home = () => {
  const { user } = useTokenContext();
  const [loading, setLoading] = useState(false);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);

      await requestGetTrips();

      setLoading(false);
    })();
  }, []);

  const requestGetTrips = async () => {
    const tripsResponse = await getTrips(user);

    setTrips(tripsResponse);
  };

  const tripsList = () => {
    return trips.map((trip, index) => (
      <SmallCard
        image={trip.image}
        title={trip.country}
        subtitle={`${trip.startDate}\n${trip.endDate}`}
        key={trip.id + index}
      />
    ));
  };

  const getChildren = () => {
    return tripsList(trips);
  };

  return (
    <>
      {loading === false ? (
        <main>
          <h1>{user.displayName}</h1>
          {getChildren()}
        </main>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};
export default Home;
