import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { NumericFormat } from "react-number-format";

export default function ExpenseDialogFormAdd({
  open,
  value,
  handleClose,
  addListItem,
  setValue,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const category = formJson.category;

          const dateElements = formJson.date.split("-");
          const date = new Date(
            dateElements[0],
            dateElements[1],
            dateElements[2]
          );

          console.log("date", date);
          console.log("typeof date", typeof date);

          const description = formJson.description;
          const item = {
            category: category,
            sum: value,
            date: date,
            description: description,
          };
          addListItem(item);
          handleClose();
        },
      }}
    >
      <DialogTitle>Expense</DialogTitle>
      <DialogContent>
        <DialogContentText>Please add item</DialogContentText>
        <TextField
          required
          margin="dense"
          id="category"
          name="category"
          label="category"
          type="text"
          fullWidth
          variant="standard"
        />
        <NumericFormat
          label="placeholder"
          value={value}
          // prefix="₽"
          onValueChange={(values) => {
            setValue(values.value);
          }}
          allowNegative={false}
        />
        <TextField
          required
          margin="dense"
          id="date"
          name="date"
          type="date"
          fullWidth
          variant="standard"
        />
        <TextField
          required
          margin="dense"
          id="description"
          name="description"
          label="description"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Add</Button>
      </DialogActions>
    </Dialog>
  );
}
