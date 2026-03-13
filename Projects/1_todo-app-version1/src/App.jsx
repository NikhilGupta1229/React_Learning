import AddToDo from "./Components/AddToDo";
import AppName from "./Components/AppName";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";
function App() {
  return (
    <center class="todo-container">
    <AppName/>
    <AddToDo/>
    <div className="item-container">
    <TodoItem1/>
    <TodoItem2/>
    </div>
    </center>
  );
}

export default App;
