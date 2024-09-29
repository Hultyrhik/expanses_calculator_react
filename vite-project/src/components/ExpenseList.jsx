import List from "@mui/material/List";
import ExpenseListItem from "./ExpenseListItem";
// import { v4 as uuid } from "uuid";

// const data = [
//   {
//     id: uuid(),
//     category: "car",
//     sum: 400,
//     date: new Date("01.01.2000"),
//     description: "Repairs",
//   },
//   {
//     id: uuid(),
//     category: "home",
//     sum: 300,
//     date: new Date("08.24.2024"),
//     description: "New stove",
//   },
//   {
//     id: uuid(),
//     category: "travel",
//     sum: 5300,
//     date: new Date("03.01.2023"),
//     description: "Bali",
//   },
//   {
//     id: uuid(),
//     category: "car",
//     sum: 400,
//     date: new Date("01.01.2000"),
//     description: "Repairs",
//   },
// ];

export default function ExpenseList({ listItems, removeItem }) {
  console.log(listItems);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {listItems.map((item) => {
        return (
          <ExpenseListItem key={item.id} item={item} removeItem={removeItem} />
        );
      })}
    </List>
  );
}
