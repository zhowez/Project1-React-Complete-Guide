import react, { useState } from "react";
import Card from "../UI/Card.js";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter.js";

function Expenses(data) {
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={data.items[0].title}
          amount={data.items[0].amount}
          date={data.items[0].date}
        ></ExpenseItem>

        <ExpenseItem
          title={data.items[1].title}
          amount={data.items[1].amount}
          date={data.items[1].date}
        ></ExpenseItem>

        <ExpenseItem
          title={data.items[2].title}
          amount={data.items[2].amount}
          date={data.items[2].date}
        ></ExpenseItem>

        <ExpenseItem
          title={data.items[3].title}
          amount={data.items[3].amount}
          date={data.items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
