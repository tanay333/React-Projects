import React, { useState } from "react";
import "./NewExpenseForm-styles.css";

const NewExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };

    console.log(expenseData); // will log the expenseData
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  const DateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  const AmountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const TitleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={TitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={DateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
