import SearchBar from '../../components/SearchBar';
import { getPins } from '@/services/pins.js';
import { useEffect, useState } from 'react';

const Discover = () => {
  const [pins, setPins] = useState([]);
  useEffect(() => {
    async () => {
      const pinsResponse = await getPins();

      if (pinsResponse === false) {
        <p>Server side error, please refresh</p>;
      } else {
        setPins(pinsResponse);
      }
    };
  });
  return (
    <main>
      <SearchBar placeholder="Search..." data={pins} />
      {pins.length !== 0 && (
        <div className="dataResult">
          {pins.slice(0, 15).map((value, key) => {
            return <p key={key}>{value.name}</p>;
          })}
        </div>
      )}
      {console.log(pins)}
    </main>
  );
};

export default Discover;
