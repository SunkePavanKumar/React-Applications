// Don't use the function because it is hardcorded. Using props nice item is defined use that

function ToDoItem1() {
  let todoName = "i will email";
  let date = "07/11/2023";
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <div className="btn btn-danger">Delete</div>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem1;
