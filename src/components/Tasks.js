const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.title}</h3>
      ))}
    </>
  );
};

export default Tasks;
