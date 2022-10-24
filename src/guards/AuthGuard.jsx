import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTokenContext } from '@/context/TokenContext.jsx';

const AuthGuard = ({ outlet }) => {
  const { user } = useTokenContext();

  return user ? outlet : <Navigate to="/login" />;
};

AuthGuard.propTypes = {
  outlet: PropTypes.element.isRequired
};

export default AuthGuard;
