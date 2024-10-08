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
import InputLabel from "@mui/material/InputLabel";

export default function ExpenseDialogFormAdd({
  open,
  sum,
  handleClose,
  addListItem,
  setSum,
  categories,
  category,
  setCategory,
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

          const date = formJson.date;

          const description = formJson.description;
          const item = {
            category: category,
            sum: sum,
            date: date,
            description: description,
          };
          addListItem(item);
          handleClose();
        },
      }}
    >
      <DialogTitle>Затраты</DialogTitle>
      <DialogContent>
        <DialogContentText>Пожалуйста добавьте расход</DialogContentText>
        <InputLabel id="category-label">Категория</InputLabel>
        <Select
          required
          labelId="category-label"
          id="category"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
          fullWidth
        >
          {categories.map((category, idx) => (
            <MenuItem key={idx} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>

        <InputLabel htmlFor="sum">Сумма</InputLabel>
        <NumericFormat
          required
          label="placeholder"
          value={sum}
          onValueChange={(values) => {
            setSum(values.value);
          }}
          allowNegative={false}
          id="sum"
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
          label="Описание"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отменить</Button>
        <Button type="submit">Добавить</Button>
      </DialogActions>
    </Dialog>
  );
}
