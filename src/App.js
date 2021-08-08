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

  return (
    <div className="app-container container d-flex justify-content-center">
      <div className="card p-2 align-self-center">
        <Header />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
