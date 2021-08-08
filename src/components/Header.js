import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div className="d-flex justify-content-between">
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'danger' : 'primary'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
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
