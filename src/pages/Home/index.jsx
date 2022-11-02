//Made By Valentinas Markulis
import './index.styles.css';
import { useTokenContext } from '@/src/context/TokenContext.jsx';
import { useState, useEffect } from 'react';
import { getTrips } from '@/src/services/trip.js';
import LoadingScreen from '@/src/LoadingScreen';
import SmallCard from '@/src/components/SmallCard/index.jsx';

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
  console.log('5', user);
  return (
    <>
      {loading === false ? (
        <main className="home-page-wrapper">
          <h1>Hello, {user.displayName.split(' ')[0]}!</h1>
          <div className="home-show-trips">
            <p>Created Trips</p>
          </div>
          <div className="home-render-trips">{getChildren()}</div>
        </main>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};
export default Home;
