import PropTypes from 'prop-types';
import './index.styles.css';

const arrayHas2Elements = (props, propName) => {
  const myProp = props[propName];
  if (!Array.isArray(myProp)) return new Error(`${propName} must be an array.`);
  if (myProp.length !== 2) return new Error(`${propName} must have 2 elements.`);
};

const Toggler = ({ items, setActiveItem, label, activeItem }) => {
  const handleSetActiveItem = (item) => {
    setActiveItem(item);
  };

  const togglerItemClass = (item) => {
    return item === activeItem ? 'toggler-item active-item' : 'toggler-item';
  };

  return (
    <>
      {label && <p style={{ marginBottom: 10 }}>{label}</p>}
      <div className="toggler-wrapper">
        <div className={togglerItemClass(items[0])} onClick={() => handleSetActiveItem(items[0])}>
          <p>{items[0]}</p>
        </div>
        <div className={togglerItemClass(items[1])} onClick={() => handleSetActiveItem(items[1])}>
          <p>{items[1]}</p>
        </div>
      </div>
    </>
  );
};

Toggler.propTypes = {
  items: arrayHas2Elements,
  activeItem: PropTypes.string.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  label: PropTypes.string
};

export default Toggler;
