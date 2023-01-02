import React from "react";
import NewExpenseForm from "./NewExpenseForm-component";

import "./NewExpense-styles.css";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <NewExpenseForm />
    </div>
  );
};

export default NewExpense;
