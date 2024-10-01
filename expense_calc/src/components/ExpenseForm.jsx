import { useState, Fragment } from "react";
import Button from "@mui/material/Button";
import ExpenseDialogFormAdd from "./ExpenseDialogFormAdd";

export default function ExpenseForm({ addListItem, categories }) {
  const [open, setOpen] = useState(false);
  const [sum, setSum] = useState(null);
  const [category, setCategory] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSum(null);
    setCategory("");
  };

  return (
    <Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Добавить расход
      </Button>
      <ExpenseDialogFormAdd
        open={open}
        sum={sum}
        handleClose={handleClose}
        addListItem={addListItem}
        setSum={setSum}
        categories={categories}
        category={category}
        setCategory={setCategory}
      />
    </Fragment>
  );
}
