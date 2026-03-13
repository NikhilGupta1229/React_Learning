import AddToDo from "./Components/AddToDo";
import AppName from "./Components/AppName";

import TodoItems from "./Components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Her Birthday",
      dueDate: "29/07/everyyear",
    },
    {
      name: "College",
      dueDate: "29/04/2026",
    }
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <TodoItems todoItems={todoItems}></TodoItems>
      
    </center>
  );
}

export default App;
