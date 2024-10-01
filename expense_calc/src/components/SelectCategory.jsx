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
      <h4>Отображение по категории</h4>
      <Select
        defaultValue="Все категории"
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
        <MenuItem key={-1} value={"Все категории"}>
          Все категории
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
