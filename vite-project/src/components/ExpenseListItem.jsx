import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";

export default function ExpenseListItem({ item }) {
  console.log(item);

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{ style: { whiteSpace: "normal" } }}
        primary={item.category}
        secondary={
          <div>
            <div>{item.date.toLocaleDateString("ru-RU")}</div>
            <div>{item.sum}</div>
            <div>{item.description}</div>
          </div>
        }
      />
    </ListItem>
  );
}
