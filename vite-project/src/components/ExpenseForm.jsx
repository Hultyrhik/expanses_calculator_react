import { useState, Fragment } from "react";
import Button from "@mui/material/Button";
import ExpenseDialogFormAdd from "./ExpenseDialogFormAdd";

export default function ExpenseForm({ addListItem }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setValue(null);
  };

  return (
    <Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add item
      </Button>
      <ExpenseDialogFormAdd
        open={open}
        value={value}
        handleClose={handleClose}
        addListItem={addListItem}
        setValue={setValue}
      />
    </Fragment>
  );
}
