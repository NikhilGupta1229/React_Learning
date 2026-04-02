import AddToDo from "./Components/AddToDo";
import AppName from "./Components/AppName";
import { useState } from "react";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
function App() {
  

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New item added : ${itemName}  Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) =>{
    const newTodoItems =  todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    
    console.log(`Item deleted:-${todoItemName}`)
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
     {todoItems.length===0 &&<WelcomeMessage todoItems={todoItems}></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick = {handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
