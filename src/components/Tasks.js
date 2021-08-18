import Task from './Task';

const Tasks = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </>
  );
};

export default Tasks;
