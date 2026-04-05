import { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
function AddToDo({onNewItem}) {

  const [todoName ,setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handleNameChange = (event) =>{
    setTodoName(event.target.value)
  }

  const handleDateChange =(event) =>{
setdueDate(event.target.value);
  }

  const handleAddButtonClicked = () =>{
    onNewItem(todoName, dueDate);
    setdueDate("");
    setTodoName("");
  }
    return(
      <div className="container text-center">

        <div className="kg-row row">
          <div className="col-sm-6">
            <input type="text" placeholder="Enter TODO here" 
            value={todoName}
            onChange={handleNameChange}/>
          </div>
          <div className="col-sm-4">
            <input type="date"
            value ={dueDate}  onChange={handleDateChange}/>
          </div>
          <div className="col-sm-2">
            <button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClicked}>
              <MdOutlineAddBox />
            </button>
          </div>
        </div>
        </div>
    )
}

export default AddToDo;