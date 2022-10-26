import PropTypes from 'prop-types';

const Tab = ({ label }) => {
  return <p>{label}</p>;
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default Tab;
