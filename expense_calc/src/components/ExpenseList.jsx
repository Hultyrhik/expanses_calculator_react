import List from "@mui/material/List";
import ExpenseListItem from "./ExpenseListItem";
import DownloadCSV from "./ DownloadCSV";

export default function ExpenseList({
  listItems,
  removeItem,
  updateItem,
  categories,
}) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {listItems.length !== 0 && (
        <DownloadCSV data={listItems} fileName="employees" />
      )}
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
