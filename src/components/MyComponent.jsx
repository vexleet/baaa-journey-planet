import PropTypes from 'prop-types';

const MyComponent = (props) => {
  return <h1>{props.message} QWE</h1>;
};

MyComponent.propTypes = {
  message: PropTypes.string
};

export default MyComponent;
