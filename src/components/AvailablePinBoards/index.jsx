import { useEffect, useState } from 'react';
import PinBoard from '../PinBoard';
import './index.styles.css';
import { getPingboards } from '../../services/pingboards';
import { useTokenContext } from '@/context/TokenContext.jsx';
import SmallCard from '@/components/SmallCard/index.jsx';
import { Draggable } from 'react-beautiful-dnd';

const AvailablePinBoards = () => {
  const { user } = useTokenContext();
  const [availablePinboards, setAvailablePinboards] = useState([]);
  const [pickedBoard, setPickedBoard] = useState(-1);

  useEffect(() => {
    const fetchPins = async () => {
      const result = await getPingboards(user);
      setAvailablePinboards(result);
    };

    fetchPins();
  }, []);

  return (
    <div className="pinBoardsWrapper">
      {pickedBoard === -1 &&
        availablePinboards.map((pinboard, index) => (
          <div onClick={() => setPickedBoard(index)} key={pinboard.id}>
            <PinBoard title={pinboard.name} pins={pinboard.pins} />
          </div>
        ))}

      {pickedBoard >= 0 && (
        <div className="picked-pins-list">
          {availablePinboards[pickedBoard].pins.map((pin, index) => (
            <Draggable index={index} draggableId={pin.id} key={pin.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}>
                  <SmallCard
                    image={pin.images[0]}
                    title={pin.name}
                    subtitle={pin.location}
                    key={pin.id + index}
                  />
                </div>
              )}
            </Draggable>
          ))}
        </div>
      )}

      {/* <Draggable index={3} draggableId={'forth-id'}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <PinBoard
              title={'Title 4'}
              images={availablePinboards.slice(9, 12).map((x) => x.images[0])}
            />
          </div>
        )}
      </Draggable> */}
    </div>
  );
};

export default AvailablePinBoards;
