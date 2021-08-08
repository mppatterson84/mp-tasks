import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Button color="primary" text="Add" />
    </div>
  );
};

Header.defaultProps = {
  title: 'Tasks'
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
