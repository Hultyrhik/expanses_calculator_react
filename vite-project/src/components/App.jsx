import "../App.css";

import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";
import ExpenseChart from "./ExpenseChart";
import ExpenseListSort from "./ExpenseListSort";
import SelectCategory from "./SelectCategory";
import { v4 as uuid } from "uuid";
import { stringToDate } from "../funcs/utilis";

import { useState, useEffect } from "react";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("listItemData"));
  if (!data) return [];

  return data;
};

const categories = ["home", "school", "car", "health", "shopping", "pet"];

function App() {
  const [listItems, setListItems] = useState(getInitialData);
  const [listItemsBuffer, setListItemsBuffer] = useState(listItems);

  const [filterByCategory, setFilterByCategory] = useState("All");
  useEffect(() => {
    localStorage.setItem("listItemData", JSON.stringify(listItems));
  }, [listItems]);

  const getTotal = () => {
    return listItemsBuffer.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue.sum),
      0
    );
  };

  const addListItem = (li) => {
    console.log("li", li);

    setListItems((prevListItems) => {
      const new_data = [
        ...prevListItems,
        {
          id: uuid(),
          category: li.category,
          sum: li.sum,
          date: li.date,
          description: li.description,
        },
      ];
      setListItemsBuffer(() => {
        return [...new_data];
      });
      return new_data;
    });
  };

  const removeItem = (id) => {
    setListItems((prevList) => {
      const new_data = prevList.filter((item) => item.id !== id);
      setListItemsBuffer(() => {
        return [...new_data];
      });
      return new_data;
    });
  };

  const updateItem = (changedItem) => {
    // console.log("changedItem", changedItem);
    setListItems((prevList) => {
      const new_data = prevList.map((item) => {
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
      setListItemsBuffer(() => {
        return [...new_data];
      });
      return new_data;
    });
  };

  const sortBySum = (isReverse) => {
    setListItemsBuffer((prevList) => {
      prevList.sort((a, b) => b.sum - a.sum);
      if (isReverse === true) {
        prevList.reverse();
      }
      return [...prevList];
    });
  };

  const sortByDate = (isReverse) => {
    setListItemsBuffer((prevList) => {
      prevList.sort((a, b) => stringToDate(b.date) - stringToDate(a.date));
      if (isReverse === true) {
        prevList.reverse();
      }
      return [...prevList];
    });
  };

  const filterByCategoryInSelect = (category) => {
    setListItemsBuffer(() => {
      return [...listItems];
    });
    if (category === "All") {
      return;
    } else {
      setListItemsBuffer((prevList) => {
        const new_data = prevList.filter((item) => item.category == category);
        return new_data;
      });
    }
  };

  return (
    <div className="App">
      <h1>Calc</h1>
      {listItems.length !== 0 && (
        <SelectCategory
          filterByCategory={filterByCategory}
          setFilterByCategory={setFilterByCategory}
          categories={categories}
          filterByCategoryInSelect={filterByCategoryInSelect}
        />
      )}
      {listItemsBuffer.length !== 0 && (
        <ExpenseChart listItems={listItemsBuffer} />
      )}
      {listItemsBuffer.length !== 0 && (
        <ExpenseListSort sortBySum={sortBySum} sortByDate={sortByDate} />
      )}
      <ExpenseList
        listItems={listItemsBuffer}
        removeItem={removeItem}
        updateItem={updateItem}
        categories={categories}
        filterByCategory={filterByCategory}
      />

      {listItemsBuffer.length !== 0 && <div>Total: {getTotal()}</div>}
      <ExpenseForm addListItem={addListItem} categories={categories} />
    </div>
  );
}

export default App;
