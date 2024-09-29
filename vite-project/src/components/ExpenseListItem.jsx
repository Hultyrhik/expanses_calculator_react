import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";

export default function ExpenseListItem({ item }) {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={{ style: { whiteSpace: "normal" } }}
        secondaryTypographyProps={{ component: "div" }}
        primary={item.category}
        secondary={
          <section>
            {/* <p>{item.date.toLocaleDateString("ru-RU")}</p> */}
            <p>{item.sum}</p>
            <p>{item.description}</p>
          </section>
        }
      />
    </ListItem>
  );
}
