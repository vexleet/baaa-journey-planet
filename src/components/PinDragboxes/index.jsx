import './index.styles.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { addPinToTrip } from '../../services/trip';

const PinDragboxes = ({ pins, droppedId, onDropUpdated, tripId }) => {
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        x: event.changedTouches[0].clientX,
        y: event.changedTouches[0].clientY
      });
    };
    window.addEventListener('touchend', handleWindowMouseMove);

    return () => {
      window.removeEventListener('touchend', handleWindowMouseMove);
    };
  }, []);

  const addPinToTripFunc = async () => await addPinToTrip(tripId, droppedId, 'morning');

  useEffect(() => {
    const firstDiv = document.getElementById('first-morning-droppable').getBoundingClientRect();

    if (droppedId) {
      if (
        globalCoords.x >= firstDiv.left &&
        globalCoords.x <= firstDiv.right &&
        globalCoords.y >= firstDiv.top &&
        globalCoords.y <= firstDiv.bottom
      ) {
        // Mouse/Finger is inside element.
        addPinToTripFunc();
      }
      onDropUpdated();
    }
  }, [droppedId]);

  return (
    <div className="dragboxes-wrapper">
      <div className="dragbox" id="first-morning-droppable">
        <div className="dragbox-content">
          {(pins.length > 0 && pins[0]?.name) || 'Drag here a pin'}
        </div>
      </div>
      <div className="dragbox">
        <div className="dragbox-content">
          {(pins.length > 1 && pins[1]?.name) || 'Drag here a pin'}
        </div>
      </div>
    </div>
  );
};

PinDragboxes.propTypes = {
  id: PropTypes.string.isRequired,
  droppedId: PropTypes.any,
  onDropUpdated: PropTypes.any,
  tripId: PropTypes.string,
  pins: PropTypes.array
};
export default PinDragboxes;
