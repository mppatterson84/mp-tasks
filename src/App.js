import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Nav from './components/Nav';
import Profile from './components/pages/Profile';
import Signup from './components/pages/Signup';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [username, setUsername] = useState('Guest');
  const [userId, setUserId] = useState(0);
  const [csrftoken, setCsrftoken] = useState('');

  // Get csrftoken
  useEffect(() => {
    setCsrftoken(Cookies.get('csrftoken'));
  }, []);

  // Get User
  useEffect(() => {
    const getUser = async () => {
      const userFromServer = await fetchUser();
      setTasks(userFromServer);
    };
    getUser();
  }, []);

  // Fetch User
  const fetchUser = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_HOST}/api/tasks/v1/users/`,
      {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      }
    );

    const data = await res.json();

    if (!data.detail) {
      setUserId(data[0].id);
      setUsername(data[0].username);
    } else {
      setUserId(0);
      setUsername('Guest');
    }

    return data;
  };

  // Get Tasks
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    if (username !== 'Guest') {
      getTasks();
    }
  }, [username]);

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
        <Nav
          username={username}
          csrftoken={csrftoken}
          setUsername={setUsername}
          setTasks={setTasks}
        />
        <div className="container">
          <Route
            exact
            path="/"
            component={() => (
              <Home
                tasks={tasks}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
                addTask={addTask}
                userId={userId}
                showAddTask={showAddTask}
                setShowAddTask={setShowAddTask}
              />
            )}
          />
          <Route
            exact
            path="/Login"
            component={() => <Login setName={setUsername} />}
          />
          <Route
            exact
            path="/Profile"
            component={() => <Profile username={username} />}
          />
          <Route exact path="/Signup" component={Signup} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
