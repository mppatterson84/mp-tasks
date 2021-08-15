import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Login from './components/pages/Login';
import Nav from './components/Nav';
import Profile from './components/pages/Profile';
import Signup from './components/pages/Signup';
import Tasks from './components/Tasks';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [username, setUsername] = useState('');
  const [csrftoken, setCsrftoken] = useState('');

  // Get csrftoken
  useEffect(() => {
    setCsrftoken(Cookies.get('csrftoken'));
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_HOST}/api/tasks/v1/users/`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
          },
          credentials: 'include'
        }
      );

      const content = await response.json();

      if (!content.detail) {
        setUsername(content[0].username);
      }
    })();
  });

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_HOST}/api/tasks/v1/`, {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    });
    const data = await res.json();

    return data;
  };

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(
      `${process.env.REACT_APP_API_HOST}/api/tasks/v1/${id}/`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
        credentials: 'include'
      }
    );
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch(`${process.env.REACT_APP_API_HOST}/api/tasks/v1/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      credentials: 'include',
      body: JSON.stringify(task)
    });
    const data = await res.json();

    setTasks([...tasks, data]);
  };

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`${process.env.REACT_APP_API_HOST}/api/tasks/v1/${id}/`, {
      headers: { 'X-CSRFToken': csrftoken },
      credentials: 'include',
      method: 'DELETE'
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle complete
  const toggleComplete = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed };

    const res = await fetch(
      `${process.env.REACT_APP_API_HOST}/api/tasks/v1/${id}/`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          'X-CSRFToken': csrftoken
        },
        credentials: 'include',
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
    <BrowserRouter>
      <div>
        <Nav username={username} csrftoken={csrftoken} />
        <div className="container">
          <Route path="/Login" component={Login} />
          <Route
            path="/Profile"
            component={() => <Profile username={username} />}
          />
          <Route path="/Signup" component={Signup} />
          <div className="card my-3 mx-auto p-2">
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
      </div>
    </BrowserRouter>
  );
}

export default App;
