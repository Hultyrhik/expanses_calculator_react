import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import ExpenseDialogFormUpdate from "./ExpenseDialogFormUpdate";

export default function ExpenseListItem({ item, removeItem, updateItem }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <EditIcon onClick={handleClickOpen} />
        </Avatar>
        <ExpenseDialogFormUpdate
          open={open}
          handleClose={handleClose}
          updateItem={updateItem}
          item={item}
        />
        <Avatar>
          <DeleteForeverIcon onClick={() => removeItem(item.id)} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{ style: { whiteSpace: "normal" } }}
        secondaryTypographyProps={{ component: "div" }}
        primary={item.category}
        secondary={
          <section>
            <p>Date: {item.date.getMonth() + "." + item.date.getFullYear()}</p>
            <p>Sum: {item.sum}</p>
            <p>Description: {item.description}</p>
          </section>
        }
      />
    </ListItem>
  );
}
