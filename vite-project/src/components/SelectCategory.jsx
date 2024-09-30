import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectCategory({
  filterByCategory,
  setFilterByCategory,
  categories,
}) {
  return (
    <Select
      defaultValue="All"
      labelId="category-label"
      id="category"
      value={filterByCategory}
      onChange={(event) => {
        setFilterByCategory(event.target.value);
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
  );
}
