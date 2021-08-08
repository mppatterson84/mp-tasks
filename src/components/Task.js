import { FaTrash } from 'react-icons/fa';

const Task = ({ task }) => {
  return (
    <div className="task mt-1 p-2">
      <span className="delete">
        <FaTrash />
      </span>
      <h4>{task.title}</h4>
      <p>{task.detail}</p>
      <p>{task.due_by}</p>
    </div>
  );
};

export default Task;
