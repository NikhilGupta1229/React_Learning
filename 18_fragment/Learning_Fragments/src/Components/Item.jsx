import styles from './Item.module.css';
const Item = (props) => {
  let{foodItem} = props;
  return (
    <li
      className={`${styles['kg-item']} `}
    >
      <span class = {styles["kg-span"]}>{foodItem}</span>
    </li>
  )
};
export default Item;
