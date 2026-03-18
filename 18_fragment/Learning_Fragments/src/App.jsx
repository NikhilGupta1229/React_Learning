import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";
function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value="";
      let newItems =[...foodItems, newFoodItem];
      setFoodItems(newItems)
      
    }
  };

  return (
    <>
      <Container>
        <h1 className="Header">Healthy Food</h1>
        <FoodInput handleOnKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems} />
        
      </Container>

      {/* <Container>
      <p>Above is the list of food</p>
    </Container> */}
    </>
  );
}

export default App;
