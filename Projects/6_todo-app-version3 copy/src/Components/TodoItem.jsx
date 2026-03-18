function TodoItem({ todoName, todoDate }) {
  return (
    <div className="kg-row row">
      <div className="col-sm-6">{todoName}</div>
      <div className="col-sm-4">{todoDate}</div>
      <div className="col-sm-2">
        <button type="button" className="btn btn-danger kg-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
