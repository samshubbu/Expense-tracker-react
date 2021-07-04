import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const [isFormValid, setIsValid] = useState(true);
  console.log({ isFormValid });

  const addExpense = (event) => {
    console.log("callled");
    event.preventDefault();
    const payload = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    for (let key in payload) {
      if (payload[key] == "") {
        setIsValid(false);
        return;
      }
    }
    console.log({ isFormValid });
    props.onNewExpense(payload);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label style={{ color: !enteredTitle && !isFormValid ? "red" : "" }}>
            Title
          </label>
          <input
            type="text"
            style={{ borderColor: !enteredTitle && !isFormValid ? "red" : "" }}
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label style={{ color: !enteredAmount && !isFormValid ? "red" : "" }}>
            Amount
          </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            style={{ borderColor: !enteredAmount && !isFormValid ? "red" : "" }}
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label style={{ color: !enteredDate && !isFormValid ? "red" : "" }}>
            Date
          </label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            style={{ borderColor: !enteredDate && !isFormValid ? "red" : "" }}
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={() => props.onNewExpense(false)}>
          Cancel
        </button>
        <button type="submit" onClick={addExpense}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
