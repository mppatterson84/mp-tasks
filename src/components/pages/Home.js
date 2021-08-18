import AddTask from '../AddTask';
import Header from '../Header';
import Tasks from '../Tasks';

const Home = ({
  tasks,
  deleteTask,
  toggleComplete,
  addTask,
  userId,
  showAddTask,
  setShowAddTask
}) => {
  return (
    <div className="card my-3 mx-auto p-2">
      <Header
        addTask={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} userId={userId} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ) : (
        <p>No tasks available. Add some tasks.</p>
      )}
    </div>
  );
};

export default Home;
