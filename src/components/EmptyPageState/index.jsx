import PropTypes from 'prop-types';

const EmptyPageState = ({ text, buttonLabel, onButtonClick }) => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '0 20px',
        textAlign: 'center'
      }}>
      {/*  TODO ADD FOR EACH COMPONENT WHEN PLAMEN MAKES THE PINGBOARD COMPONENT*/}
      <img src="/images/empty-state.svg" style={{ width: '100%', height: 200 }} />
      <p className="text" style={{ marginTop: 15 }}>
        {text}
      </p>
      {buttonLabel && (
        <button className="primary-button" onClick={onButtonClick}>
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

EmptyPageState.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func,
  buttonLabel: PropTypes.string
};

export default EmptyPageState;
