import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

interface ListItemProps {
  text: string;
  icon: JSX.Element;
  open: boolean;
  onClick: () => any;
}

const ListItem = ({ text, icon, open, onClick }: ListItemProps) => {
  return (
    <ListItemButton
      key={text}
      sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.5,
      }}
      onClick={onClick}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : "auto",
          justifyContent: "center",
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  );
};

export default ListItem;
