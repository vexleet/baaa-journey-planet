import './index.styles.css';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { DragTypes } from '../../utils/dragTypes';

const PinBoard = ({ images, title }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DragTypes.PIN,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  console.log('da', drag);
  console.log('da', isDragging);

  return (
    <div className="pin-board-wrapper" ref={drag}>
      {images.map((image) => (
        <img key={image} src={image} />
      ))}

      <p className="board-title">{title}</p>
    </div>
  );
};

PinBoard.propTypes = {
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default PinBoard;
