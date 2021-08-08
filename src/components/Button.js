import PropTypes from 'prop-types';

const Button = ({ color, text }) => {
  return (
    <div>
      <button className={`btn btn-${color}`}>{text}</button>
    </div>
  );
};

Button.defaultProps = {
  color: 'secondary'
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
};

export default Button;
