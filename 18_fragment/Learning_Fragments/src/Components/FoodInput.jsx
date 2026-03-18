import styles from "./FoodInput.module.css";

const FoodInput = ({handleOnKeyDown}) => {

  
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.FoodInput}
      onKeyDown={handleOnKeyDown}
    />
  );
};

export default FoodInput;