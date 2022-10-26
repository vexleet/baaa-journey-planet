import PropTypes from 'prop-types';

const Tab = ({ label, className }) => {
  return <p className={className}>{label}</p>;
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Tab;
