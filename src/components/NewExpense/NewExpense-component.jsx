import React from "react";
import NewExpenseForm from "./NewExpenseForm-component";
import { v1 as uuid1 } from "uuid";

import "./NewExpense-styles.css";

const NewExpense = (props) => {
  // function to accept the expense data from Expense Form
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuid1(),
    };
    console.log(expenseData);
    props.onNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
