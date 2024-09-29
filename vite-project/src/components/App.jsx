import "../App.css";

import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";

import { useState, useEffect } from "react";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("listItemData"));
  if (!data) return [];
  return data;
};

function App() {
  const [listItems, setListItems] = useState(getInitialData);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(listItems));
  }, [listItems]);

  const AddListItem = (li) => {
    setListItems((prevListItems) => {
      return [
        ...prevListItems,
        {
          id: uuid(),
          category: li.category,
          sum: li.sum,
          date: li.date,
          description: li.description,
        },
      ];
    });
  };

  return (
    <div className="App">
      <h1>Calc</h1>
      <ExpenseList />
      <ExpenseForm AddListItem={AddListItem} />
    </div>
  );
}

export default App;
