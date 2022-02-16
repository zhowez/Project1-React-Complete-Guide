import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";

function ExpenseItem(data) {
  const [title, setTitle] = useState(data.title);

  const clickHandler = () => {
    setTitle("Updated!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={data.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item_∏_price">${data.amount} </div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
