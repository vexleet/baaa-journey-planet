import PropTypes from 'prop-types';

const arrayHas2Elements = (props, propName) => {
  const myProp = props[propName];
  if (!Array.isArray(myProp)) return new Error(`${propName} must be an array.`);
  if (myProp.length !== 2) return new Error(`${propName} must have 2 elements.`);
};

const Toggler = ({ items, setActiveItem }) => {
  const handleSetActiveItem = (item) => {
    setActiveItem(item);
  };

  // TODO USE THIS IN ORDER TO SET DIFFERENT COLLOR FOR AN ITEM
  // DO SOMETHING LIKE THAT className={isActiveItem(items[0]) ? 'toggle-item 'toggle-item-active' : 'toggle-item');
  // const isActiveItem = (item) => {
  //     return item === activeItem
  // }

  return (
    <div>
      <div onClick={() => handleSetActiveItem(items[0])}>
        <p>{items[0]}</p>
      </div>
      <div onClick={() => handleSetActiveItem(items[1])}>
        <p>{items[1]}</p>
      </div>
    </div>
  );
};

Toggler.propTypes = {
  items: arrayHas2Elements,
  activeItem: PropTypes.string.isRequired,
  setActiveItem: PropTypes.func.isRequired
};

export default Toggler;
