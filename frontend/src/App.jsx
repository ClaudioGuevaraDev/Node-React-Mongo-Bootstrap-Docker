import "bootstrap/dist/css/bootstrap.min.css"

import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

const App = () => {
  return (
    <div className="bg-dark min-vh-100">
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForm/>
          </div>
          <div className="col-md-7">
            <TaskList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App