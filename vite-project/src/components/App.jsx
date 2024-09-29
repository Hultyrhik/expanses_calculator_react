import "../App.css";

import { Box } from "@mui/material";

import TableRow from "./TableRow";
import ExpenseList from "./ExpenseList";

function App() {
  return (
    <div className="App">
      <Box sx={{ overflow: "auto" }}>
        <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
          <h1>Calc</h1>
          <ExpenseList />
        </Box>
      </Box>
    </div>
  );
}

export default App;
