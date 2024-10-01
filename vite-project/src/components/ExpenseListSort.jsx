import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";

const arrowUp = "↑";
const arrowDown = "↓";

export default function ExpenseListSort({ sortBySum, sortByDate }) {
  const [clickedButtonDate, setClickedButtonDate] = useState(false);
  const [clickedButtonSum, setClickedButtonSum] = useState(false);
  const [arrowDate, setArrowDate] = useState(arrowUp);
  const [arrowSum, setArrowSum] = useState(arrowUp);

  const handleButtonDate = () => {
    if (clickedButtonDate === false) {
      sortByDate(false);
      setClickedButtonDate(true);
      setArrowDate(arrowDown);
    } else {
      sortByDate(true);
      setClickedButtonDate(false);
      setArrowDate(arrowUp);
    }
  };

  const handleButtonSum = () => {
    if (clickedButtonSum === false) {
      sortBySum(false);
      setClickedButtonSum(true);
      setArrowSum(arrowDown);
    } else {
      sortBySum(true);
      setClickedButtonSum(false);
      setArrowSum(arrowUp);
    }
  };

  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button onClick={handleButtonDate}>Sort by Date {arrowDate}</Button>
      <Button onClick={handleButtonSum}>Sort by Sum {arrowSum}</Button>
    </ButtonGroup>
  );
}
