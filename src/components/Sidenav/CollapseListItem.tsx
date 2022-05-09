import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

interface CollapseListItemProps {
  title: string;
  icon: JSX.Element;
  open: boolean;
  collapse: boolean;
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
  nestedListItems: {
    text: string;
    icon: JSX.Element;
    onClick: () => any;
  }[];
}

const CollapseListItem = ({
  title,
  icon,
  open,
  collapse,
  setCollapse,
  nestedListItems,
}: CollapseListItemProps) => {
  return (
    <>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
        onClick={() => setCollapse(!collapse)}
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
        <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
        {open ? collapse ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItemButton>
      <Collapse in={collapse} timeout="auto" unmountOnExit>
        <List disablePadding>
          {/* NOTE: Using the ListItem component will mess up indentation */}
          {nestedListItems.map((listItem) => (
            <ListItemButton
              key={listItem.text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: { md: 2.5 },
              }}
              onClick={listItem.onClick}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  pl: open ? 2 : 0,
                }}
              >
                {listItem.icon}
              </ListItemIcon>
              <ListItemText
                primary={listItem.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default CollapseListItem;
