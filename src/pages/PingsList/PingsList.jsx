import { useEffect, useState } from 'react';
import { getPings } from '@/services/ping.js';
import PingCard from '@/components/Card/PingCard.jsx';

const PingsList = () => {
  const [pings, setPings] = useState([]);

  useEffect(() => {
    (async () => {
      const pingsResponse = await getPings();

      setPings(pingsResponse);
    })();
  }, []);

  return pings.length !== 0 ? (
    pings.map((ping) => (
      <PingCard
        key={ping.id}
        locaiton={ping.pingLocation}
        image={ping.images[0]}
        name={ping.pingName}
        id={ping.id}
      />
    ))
  ) : (
    <h1>Loading</h1>
  );
};

export default PingsList;
