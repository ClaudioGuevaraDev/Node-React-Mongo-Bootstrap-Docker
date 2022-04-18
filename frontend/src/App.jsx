import axios from "axios";
import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    const res = await axios.get("/api/tasks");
    setTasks(res.data)
  };

  useEffect(() => {
    getTasks();
  }, []);


  return (
    <div className="bg-dark min-vh-100">
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm setTasks={setTasks} tasks={tasks}/>
          </div>
          <div className="col-md-7">
            <TaskList tasks={tasks}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
