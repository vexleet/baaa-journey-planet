import PropTypes from 'prop-types';

const PingBoardImages = ({ images }) => {
  return (
    <div
      style={{
        width: 150,
        height: 150,
        display: 'flex',
        justifyContent: 'center'
      }}>
      {images.map((image, index) => (
        <img
          key={image + index}
          src={image}
          width="100%"
          style={{
            width: `calc(100% / ${images.length})`,
            borderRadius: index > 0 ? '0 10px 10px 0' : 10,
            marginLeft: index > 0 ? -10 : 0,
            objectFit: 'cover',
            zIndex: -index + 5
          }}
        />
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
    <div style={{ textAlign: 'center', display: 'inline-block' }}>
      {firstThreeImages.length === 0 ? (
        <div>
          <img
            src="/images/empty-pingboard.jpg"
            style={{
              borderRadius: 10,
              objectFit: 'cover',
              width: 150,
              height: 150
            }}
          />
        </div>
      ) : (
        <PingBoardImages images={images} />
      )}
      <p style={{ fontWeight: 600, marginTop: 5 }}>{name}</p>
    </div>
  );
};

Pingboard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired
};

export default Pingboard;
