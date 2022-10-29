import PropTypes from 'prop-types';

const PingBoardImages = ({ images }) => {
  return (
    <div style={{ width: 300 }}>
      {images.map((image, index) => (
        <img key={image + index} src={image} width="100%" />
      ))}
    </div>
  );
};

PingBoardImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Pingboard = ({ name, images }) => {
  const firstThreeImages = images.slice(0, 3);

  return (
    <div style={{ textAlign: 'center' }}>
      {firstThreeImages.length === 0 ? (
        <img src="src/assets/images/empty-pingboard.jpg" />
      ) : (
        <PingBoardImages images={images} />
      )}
      <p>{name}</p>
    </div>
  );
};

Pingboard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired
};

export default Pingboard;
