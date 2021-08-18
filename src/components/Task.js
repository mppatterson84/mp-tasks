import { FaTrashAlt } from 'react-icons/fa';

const Task = ({ task, deleteTask, toggleComplete }) => {
  return (
    <div className="task mt-1 p-2">
      <span className="delete">
        <FaTrashAlt onClick={() => deleteTask(task.id)} />
      </span>
      <span>
        <input
          type="checkbox"
          name="completed"
          id="completedCheck"
          onChange={() => toggleComplete(task.id)}
          checked={task.completed ? task.completed : false}
        />
      </span>
      <h4>{task.title}</h4>
      <p>{task.detail}</p>
      <p>{task.due_by}</p>
    </div>
  );
};

export default Task;
