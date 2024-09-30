import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";

export default function ExpenseListSort({ sortBySum, sortByDate }) {
  const [clickedButtonDate, setClickedButtonDate] = useState(false);
  const [clickedButtonSum, setClickedButtonSum] = useState(false);

  const handleButtonDate = () => {
    if (clickedButtonDate === false) {
      sortByDate(false);
      setClickedButtonDate(true);
    } else {
      sortByDate(true);
      setClickedButtonDate(false);
    }
  };

  const handleButtonSum = () => {
    if (clickedButtonSum === false) {
      sortBySum(false);
      setClickedButtonSum(true);
    } else {
      sortBySum(true);
      setClickedButtonSum(false);
    }
  };

  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button onClick={handleButtonDate}>Sort by Date</Button>
      <Button onClick={handleButtonSum}>Sort by Sum</Button>
    </ButtonGroup>
  );
}
