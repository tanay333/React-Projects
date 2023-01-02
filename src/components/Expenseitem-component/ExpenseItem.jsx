import { useState } from "react";
import "./ExpenseItem-styles.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate-component";
import Card from "../Card/Card-component";

const ExpenseItem = (props) => {
  const { amount, date } = props.item;
  const [title, setTitle] = useState(props.item.title);
  const handleClick = () => {
    setTitle("clicked!");
    console.log("clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {amount}</div>
      </div>
      <button onClick={handleClick}>Change Title </button>
    </Card>
  );
};

export default ExpenseItem;
