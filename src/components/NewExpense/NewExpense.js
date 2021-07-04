import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setExpenseForm] = useState(false);
  const addNewExpense = (e) => {
    if (!e) {
      setExpenseForm(false);
    } else {
      props.onNewExpenseAdd(e);
      setExpenseForm(false);
    }
  };

  const onShowExpense = (event) => setExpenseForm(true);
  const addNewExpenseButton = (
    <div>
      <button onClick={onShowExpense}>Add New Expense</button>
    </div>
  );
  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm onNewExpense={addNewExpense} />
      ) : (
        addNewExpenseButton
      )}
    </div>
  );
};

export default NewExpense;
