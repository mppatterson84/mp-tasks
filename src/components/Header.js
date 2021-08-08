import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
  const onClick = () => {
    console.log('click');
  };
  return (
    <div className="d-flex justify-content-between">
      <h1>{title}</h1>
      <Button color="primary" text="Add" onClick={onClick} />
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
