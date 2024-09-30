import "../App.css";

import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";
import ExpenseChart from "./ExpenseChart";
import ExpenseListSort from "./ExpenseListSort";
import { v4 as uuid } from "uuid";
import { stringToDate } from "../funcs/utilis";

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
    console.log("listItems!!!!!", listItems);

    return listItems.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.sum),
      0
    );
  };

  const addListItem = (li) => {
    console.log("li", li);

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

  const updateItem = (changedItem) => {
    // console.log("changedItem", changedItem);
    setListItems((prevList) => {
      return prevList.map((item) => {
        // console.log("one of items", item);
        if (item.id === changedItem.id) {
          // console.log("item.id === changedItem.id", item);
          return {
            id: changedItem.id,
            category: changedItem.category,
            sum: changedItem.sum,
            date: changedItem.date,
            description: changedItem.description,
          };
        } else {
          // console.log(`${item.id} === ${changedItem.id}`);
          return item;
        }
      });
    });
  };

  const sortBySum = (isReverse) => {
    setListItems((prevList) => {
      prevList.sort((a, b) => b.sum - a.sum);
      if (isReverse === true) {
        prevList.reverse();
      }
      return [...prevList];
    });
  };

  const sortByDate = (isReverse) => {
    setListItems((prevList) => {
      prevList.sort((a, b) => stringToDate(b.date) - stringToDate(a.date));
      if (isReverse === true) {
        prevList.reverse();
      }
      return [...prevList];
    });
  };

  return (
    <div className="App">
      <h1>Calc</h1>
      {listItems.length !== 0 && <ExpenseChart listItems={listItems} />}
      {listItems.length !== 0 && (
        <ExpenseListSort sortBySum={sortBySum} sortByDate={sortByDate} />
      )}
      <ExpenseList
        listItems={listItems}
        removeItem={removeItem}
        updateItem={updateItem}
      />

      {listItems.length !== 0 && <div>Total: {getTotal()}</div>}
      <ExpenseForm addListItem={addListItem} />
    </div>
  );
}

export default App;
