import List from "@mui/material/List";
import ExpenseListItem from "./ExpenseListItem";

export default function ExpenseList({
  listItems,
  removeItem,
  updateItem,
  categories,
}) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {listItems.map((item) => {
        return (
          <ExpenseListItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            updateItem={updateItem}
            categories={categories}
          />
        );
      })}
    </List>
  );
}
