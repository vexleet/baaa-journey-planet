import PropTypes from 'prop-types';
import './TextField.styles.css';

const TextField = ({ id, label, placeholder, type, onChange, value, isDisabled }) => {
  return (
    <div>
      {/*If label is not empty show it */}
      {label !== '' && (
        <label className="textfield-label" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        className="textfield-input"
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
      />
    </div>
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool
};

TextField.defaultProps = {
  type: 'text',
  isDisabled: false
};

export default TextField;
