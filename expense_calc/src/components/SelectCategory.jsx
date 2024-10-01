import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectCategory({
  filterByCategory,
  setFilterByCategory,
  categories,
  filterByCategoryInSelect,
}) {
  return (
    <Box>
      <h4>Filter by category</h4>
      <Select
        defaultValue="All"
        labelId="category-label"
        id="category"
        value={filterByCategory}
        onChange={(event) => {
          const category = event.target.value;
          setFilterByCategory(category);
          filterByCategoryInSelect(category);
        }}
        fullWidth
      >
        <MenuItem key={-1} value={"All"}>
          All
        </MenuItem>
        {categories.map((category, idx) => (
          <MenuItem key={idx} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
