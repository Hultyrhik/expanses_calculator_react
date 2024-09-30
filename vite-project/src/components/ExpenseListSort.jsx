import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function ExpenseListSort({ sortBySum, sortByDate }) {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button onClick={sortByDate}>Sort by Date</Button>
      <Button onClick={sortBySum}>Sort by Sum</Button>
    </ButtonGroup>
  );
}
