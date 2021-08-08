import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/tasks/v1/?format=json');
    const data = await res.json();

    return data;
  };

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(
      `http://127.0.0.1:8000/api/tasks/v1/${id}/?format=json`
    );
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://127.0.0.1:8000/api/tasks/v1/?format=json', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(task)
    });
    const data = await res.json();

    setTasks([...tasks, data]);
  };

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/tasks/v1/${id}/?format=json`, {
      method: 'DELETE'
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle complete
  const toggleComplete = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed };

    const res = await fetch(
      `http://127.0.0.1:8000/api/tasks/v1/${id}/?format=json`,
      {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(updatedTask)
      }
    );

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: data.completed } : task
      )
    );
  };

  return (
    <div className="app-container container d-flex justify-content-center">
      <div className="card my-2 p-2 align-self-center">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleComplete}
          />
        ) : (
          <p>No tasks available. Add some tasks.</p>
        )}
      </div>
    </div>
  );
}

export default App;
