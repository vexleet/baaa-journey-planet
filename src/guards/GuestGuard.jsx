import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTokenContext } from '@/src/context/TokenContext.jsx';

const GuestGuard = ({ outlet }) => {
  const { user } = useTokenContext();

  return user ? <Navigate to="/" /> : outlet;
};

GuestGuard.propTypes = {
  outlet: PropTypes.node.isRequired
};

export default GuestGuard;
