import * as React from "react";
import Button from "@mui/material/Button";
import ExpenseDialogForm from "./ExpenseDialogForm";

export default function ExpenseForm({ addListItem }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setValue(null);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add item
      </Button>
      <ExpenseDialogForm
        open={open}
        value={value}
        handleClose={handleClose}
        addListItem={addListItem}
        setValue={setValue}
      />
    </React.Fragment>
  );
}
