import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Finish Building Tasks API',
      detail: 'Implement all the features for the API.',
      completed: true,
      created_at: '2021-08-07T08:15:26.401197-05:00',
      due_by: '2021-08-08T08:15:26.401233-05:00',
      author: 1
    },
    {
      id: 2,
      title: 'Add Scheme',
      detail: 'Add OpenAPI scheme to API.',
      completed: false,
      created_at: '2021-08-07T16:13:26.683593-05:00',
      due_by: '2021-08-08T16:13:26.683608-05:00',
      author: 2
    },
    {
      id: 3,
      title: 'Add API Documentation',
      detail: 'Add Swagger API documentation to API.',
      completed: false,
      created_at: '2021-08-07T16:15:06.231946-05:00',
      due_by: '2021-08-08T16:15:06.231964-05:00',
      author: 2
    }
  ]);

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app-container container d-flex justify-content-center">
      <div className="card my-2 p-2 align-self-center">
        <Header />
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
