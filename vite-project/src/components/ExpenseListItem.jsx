import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function ExpenseListItem({ item, removeItem }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <DeleteForeverIcon onClick={() => removeItem(item.id)} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{ style: { whiteSpace: "normal" } }}
        secondaryTypographyProps={{ component: "div" }}
        primary={item.category}
        secondary={
          <section>
            <p>{item.date}</p>
            <p>{item.sum}</p>
            <p>{item.description}</p>
          </section>
        }
      />
    </ListItem>
  );
}
