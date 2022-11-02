import { useEffect, useState } from 'react';
import { getPins } from '@/services/pins.js';
import PinCard from '../../components/PinCard';

const PinsList = () => {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    (async () => {
      const pinsResponse = await getPins();

      setPins(pinsResponse);
    })();
  }, []);

  return pins.length !== 0 ? (
    pins.map((pin) => (
      <PinCard
        key={pin.id}
        locaiton={pin.location}
        image={pin.images[0]}
        name={pin.name}
        id={pin.id}
      />
    ))
  ) : (
    <h1>Loading</h1>
  );
};

export default PinsList;
