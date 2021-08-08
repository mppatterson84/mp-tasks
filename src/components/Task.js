const Task = ({ task }) => {
  return (
    <div className="task mt-1 p-2">
      <h3>{task.title}</h3>
      <p>{task.detail}</p>
      <p>{task.due_by}</p>
    </div>
  );
};

export default Task;
