const AddTask = () => {
  return (
    <form className="add-task-form">
      <div className="form-group mt-2">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          id="task"
          placeholder="Add Task"
          className="form-control"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="detail">Detail</label>
        <input
          type="text"
          id="detail"
          placeholder="Add some details."
          className="form-control"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="datetime">Due Date & Time</label>
        <input type="datetime-local" id="datetime" className="form-control" />
      </div>
      <input type="submit" value="Save Task" className="btn btn-success my-2" />
    </form>
  );
};

export default AddTask;
