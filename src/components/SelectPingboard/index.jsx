import { useEffect, useState } from 'react';
import { addPinToPingboard, getPingboards } from '@/src/services/pingboards.js';
import { useTokenContext } from '@/src/context/TokenContext.jsx';
import PopupDialog from '@/src/components/PopupDialog/index.jsx';
import PropTypes from 'prop-types';
import Pingboard from '@/src/components/Pingboard/index.jsx';
import LoadingScreen from '@/src/components/LoadingScreen/index.jsx';
import { toast } from 'react-toastify';

const SelectPingBoardLoading = () => {
  return (
    <div
      style={{
        position: 'relative',
        height: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <LoadingScreen />
    </div>
  );
};

const SelectPingboard = ({ children, pin }) => {
  const { user } = useTokenContext();

  const [isLoading, setIsLoading] = useState(false);

  const [selectPingboardIsOpen, setSelectPingboardIsOpen] = useState(false);

  const [pingboards, setPingboards] = useState([]);

  useEffect(() => {
    if (selectPingboardIsOpen) {
      fetchPingboards();
    }
  }, [selectPingboardIsOpen]);

  const fetchPingboards = async () => {
    setIsLoading(true);

    const pingboardsResponse = await getPingboards(user);
    setPingboards(pingboardsResponse);

    setIsLoading(false);
  };

  const getPingboardPinsImages = (pins) => {
    return pins.map((pin) => pin.images[0]);
  };

  const renderPingboardItems = () => {
    return pingboards.map((pingboard) => (
      <div key={pingboard.id} onClick={() => addPin(pingboard)}>
        <Pingboard images={getPingboardPinsImages(pingboard.pins)} name={pingboard.name} />
      </div>
    ));
  };

  const togglePopup = () => setSelectPingboardIsOpen((prevState) => !prevState);

  const checkIfPinExists = (pingboard) => {
    const pingboardPinIds = pingboard.pins.map((pin) => pin.id);

    return pingboardPinIds.includes(pin.id);
  };

  const addPin = async (pingboard) => {
    if (checkIfPinExists(pingboard)) {
      toast('Pin is already in pingboard!', { type: 'error' });
      return;
    }

    const response = await addPinToPingboard(pingboard, pin);

    if (response) {
      toast(`Successfully added a pin ${pin.name} to ${pingboard.name} pingboard.`, {
        type: 'success'
      });
      await fetchPingboards();
    } else {
      toast('Something went wrong with adding your pin! Try again.', { type: 'error' });
    }
  };

  return (
    <>
      <div onClick={togglePopup}>{children}</div>

      <PopupDialog isOpen={selectPingboardIsOpen} onClickOutside={togglePopup}>
        {isLoading ? (
          <SelectPingBoardLoading />
        ) : (
          <div
            style={{
              height: '70vh',
              overflow: 'scroll',
              display: 'flex',
              justifyContent: 'center',
              gap: 20,
              flexWrap: 'wrap'
            }}>
            {renderPingboardItems()}
          </div>
        )}
      </PopupDialog>
    </>
  );
};

SelectPingboard.propTypes = {
  children: PropTypes.node,
  pin: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    coordinates: PropTypes.arrayOf(PropTypes.number),
    address: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string)
  })
};

export default SelectPingboard;
