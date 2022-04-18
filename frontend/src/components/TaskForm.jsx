const TaskForm = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-center">Task Form</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="mb-2">
              <input
                type="text"
                placeholder="Task Title"
                autoFocus
                required
                className="form-control"
              />
            </div>
            <div className="mb-4">
              <textarea
                rows="5"
                placeholder="Task Description"
                required
                className="form-control"
              ></textarea>
            </div>
            <div className="mb-2">
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
