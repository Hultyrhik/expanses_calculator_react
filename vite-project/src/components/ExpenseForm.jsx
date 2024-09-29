import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { NumericFormat } from "react-number-format";

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
            const date = formJson.date;
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
        <DialogTitle>Subscribe</DialogTitle>
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
            value={value}
            prefix="₽"
            onValueChange={(values) => {
              setValue(values.value);
            }}
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
    </React.Fragment>
  );
}
