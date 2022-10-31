import PropTypes from 'prop-types';

const TabPanel = ({ children }) => {
  return children;
};

TabPanel.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default TabPanel;
