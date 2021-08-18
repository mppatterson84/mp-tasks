import { useState } from 'react';

const AddTask = ({ addTask, userId }) => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [completed, setCompleted] = useState(false);
  const [due_by, setDueBy] = useState('');
  const [author, setAuthor] = useState(userId);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert('Please add a task.');
      return;
    }

    addTask({ title, detail, due_by, completed, author });

    setTitle('');
    setDetail('');
    setCompleted(false);
    setDueBy('');
    setAuthor(userId);
  };

  return (
    <form className="add-task-form" onSubmit={onSubmit}>
      <div className="form-group mt-2">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="task"
          placeholder="Add Task"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="detail">Detail</label>
        <input
          type="text"
          id="detail"
          placeholder="Add some details."
          className="form-control"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="datetime">Due Date & Time</label>
        <input
          type="datetime-local"
          id="datetime"
          className="form-control"
          value={due_by}
          onChange={(e) => setDueBy(e.target.value)}
          required
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-success my-2" />
    </form>
  );
};

export default AddTask;
