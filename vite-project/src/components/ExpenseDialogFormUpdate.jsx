import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { NumericFormat } from "react-number-format";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function ExpenseDialogFormUpdate({
  open,
  handleClose,
  updateItem,
  item,
  categories,
}) {
  const [itemValues, setItemValues] = useState(item);
  // console.log("itemValues", itemValues);

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    // console.log("changedField", changedField);
    // console.log("newValue", newValue);
    setItemValues((currData) => {
      return {
        ...currData,
        [changedField]: newValue,
      };
    });
  };

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
          const description = formJson.description;
          const sum = formJson.sum;
          const date = formJson.date;

          // console.log("Sum", sum);

          const item = {
            id: itemValues.id,
            category: category,
            sum: sum,
            date: date,
            description: description,
          };
          // console.log("updatedItem", item);
          updateItem(item);
          handleClose();
        },
      }}
    >
      <DialogTitle>Expense</DialogTitle>
      <DialogContent>
        <DialogContentText>Please add item</DialogContentText>
        {/* <TextField
          required
          margin="dense"
          id="category"
          name="category"
          label="category"
          type="text"
          fullWidth
          variant="standard"
          value={itemValues.category}
          onChange={handleChange}
        /> */}
        <Select
          labelId="category-label"
          id="category"
          name="category"
          value={itemValues.category}
          onChange={handleChange}
          fullWidth
        >
          {categories.map((category, idx) => (
            <MenuItem key={idx} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
        <InputLabel htmlFor="sum">Sum</InputLabel>
        <NumericFormat
          required
          label="placeholder"
          value={itemValues.sum}
          name="sum"
          id="sum"
          allowNegative={false}
          onChange={handleChange}
        />
        <TextField
          required
          margin="dense"
          id="date"
          name="date"
          type="date"
          fullWidth
          variant="standard"
          value={itemValues.date}
          onChange={handleChange}
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
          value={itemValues.description}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Confirm edit</Button>
      </DialogActions>
    </Dialog>
  );
}
