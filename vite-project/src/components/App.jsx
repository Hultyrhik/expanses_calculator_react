import "../App.css";

import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";
import { v4 as uuid } from "uuid";

import { useState, useEffect } from "react";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("listItemData"));
  if (!data) return [];
  return data;
};

function App() {
  const [listItems, setListItems] = useState(getInitialData);
  useEffect(() => {
    localStorage.setItem("listItemData", JSON.stringify(listItems));
  }, [listItems]);

  const getTotal = () => {
    return listItems.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.sum),
      0
    );
  };

  const addListItem = (li) => {
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

  const removeItem = (id) => {
    setListItems((prevList) => {
      return prevList.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="App">
      <h1>Calc</h1>
      <ExpenseList listItems={listItems} removeItem={removeItem} />
      {listItems.length !== 0 && <div>Total: {getTotal()}</div>}
      <ExpenseForm addListItem={addListItem} />
    </div>
  );
}

export default App;
