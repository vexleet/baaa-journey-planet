import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MyComponent = (props) => {
  return (
    <h1>
      {props.message} <Link to="/create-pin">QWE</Link>
    </h1>
  );
};

MyComponent.propTypes = {
  message: PropTypes.string
};

export default MyComponent;
