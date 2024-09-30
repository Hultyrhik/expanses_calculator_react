import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { NumericFormat } from "react-number-format";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

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
        {/* <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select> */}
        <div>
          <span>Sum </span>
          <NumericFormat
            label="placeholder"
            value={value}
            // prefix="₽"
            onValueChange={(values) => {
              setValue(values.value);
            }}
            allowNegative={false}
          />
        </div>
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
