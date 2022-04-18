import { useState } from "react";
import axios from "axios";

const TaskForm = ({ setTasks, tasks }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("/api/tasks", task);

    setTasks([...tasks, res.data]);

    setTask({
      title: "",
      description: "",
    });
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-center">Task Form</h3>
        </div>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="mb-2">
              <input
                type="text"
                placeholder="Task Title"
                autoFocus
                required
                className="form-control"
                value={task.title}
                onChange={({ target }) =>
                  setTask({ ...task, title: target.value })
                }
              />
            </div>
            <div className="mb-4">
              <textarea
                rows="5"
                placeholder="Task Description"
                required
                className="form-control"
                value={task.description}
                onChange={({ target }) =>
                  setTask({ ...task, description: target.value })
                }
              ></textarea>
            </div>
            <div className="mb-2">
              <button
                type="submit"
                className="btn btn-primary w-100"
                onSubmit={onSubmit}
              >
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
