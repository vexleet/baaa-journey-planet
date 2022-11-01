import { useEffect, useState } from 'react';
import { getPins } from '../../services/pins';
import PinBoard from '../PinBoard';
import './index.styles.css';

const AvailablePinBoards = () => {
  const [availablePinboards, setAvailablePinboards] = useState([]);

  useEffect(() => {
    const fetchPins = async () => {
      const result = await getPins();
      setAvailablePinboards(result.slice(0, 12));
    };

    fetchPins();
  }, []);

  return (
    <div className="pinBoardsWrapper">
      <PinBoard title={'Title 1'} images={availablePinboards.slice(0, 3).map((x) => x.images[0])} />
      <PinBoard title={'Title 2'} images={availablePinboards.slice(3, 6).map((x) => x.images[0])} />
      <PinBoard title={'Title 3'} images={availablePinboards.slice(6, 9).map((x) => x.images[0])} />
      <PinBoard
        title={'Title 4'}
        images={availablePinboards.slice(9, 12).map((x) => x.images[0])}
      />
    </div>
  );
};

export default AvailablePinBoards;
