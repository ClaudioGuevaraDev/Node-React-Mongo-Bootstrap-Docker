const TaskList = ({ tasks }) => {
  return (
    <>
      <table className="table table-striped table-light table-hover text-dark text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => {
            return (
              <tr key={t._id}>
                <td>{t._id}</td>
                <td>{t.title}</td>
                <td>{t.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TaskList;
