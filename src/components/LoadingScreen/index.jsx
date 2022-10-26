// Plamen Michev
import './index.styles.css';
import logoSvg from '../../assets/images/logo.svg';

const LoadingScreen = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader" />
      <img src={logoSvg} className="logo-loader" width="200px" height="200px" />
    </div>
  );
};

export default LoadingScreen;
