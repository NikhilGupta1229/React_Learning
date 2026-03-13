import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems"
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  let foodItems = ["Dal", "salad", "Milk", "Curd"];//String Array

  return(
    <>
      <h1 className = "Header">Healthy Food</h1>
     <FoodItems items = {foodItems}/>
      <ErrorMessage items ={foodItems}></ErrorMessage>
    </>
  );
}

export default App;
