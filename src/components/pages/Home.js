import AddTask from '../AddTask';
import Header from '../Header';
import Tasks from '../Tasks';

const Home = ({
  tasks,
  onDelete,
  onToggle,
  onAdd,
  userId,
  showAddTask,
  setShowAddTask
}) => {
  return (
    <div className="card my-3 mx-auto p-2">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={onAdd} userId={userId} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
      ) : (
        <p>No tasks available. Add some tasks.</p>
      )}
    </div>
  );
};

export default Home;
