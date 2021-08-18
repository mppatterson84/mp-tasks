import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, addTask, showAddTask }) => {
  return (
    <div className="d-flex justify-content-between">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? 'danger' : 'primary'}
        text={showAddTask ? 'Close' : 'Add'}
        onClick={addTask}
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
