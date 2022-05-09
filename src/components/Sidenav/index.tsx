import { useState } from "react";
import { toast } from "react-toastify";
import { useTheme } from "@mui/material/styles";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Dangerous,
  Home,
  Login,
  Notifications,
  Person,
  Warning,
} from "@mui/icons-material";
import {
  Box,
  CssBaseline,
  Divider,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import DrawerHeader from "./DrawerHeader";
import CustomAppBar from "./CustomAppBar";
import ListItem from "./ListItem";
import CollapseListItem from "./CollapseListItem";

const Sidenav = (props: any) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [collapse, setCollapse] = useState(false);
  const listItems = [
    { text: "Home", icon: <Home />, onClick: () => navigate("/") },
    { text: "Users", icon: <Person />, onClick: () => navigate("/users") },
    { text: "Login Page", icon: <Login />, onClick: () => navigate("/login") },
  ];
  const nestedListItems = [
    {
      text: "Danger",
      icon: <Dangerous />,
      onClick: () => toast.error("Danger alert!"),
    },
    {
      text: "Warning",
      icon: <Warning />,
      onClick: () => toast.warn("Warning alert!"),
    },
    {
      text: "Success",
      icon: <CheckCircle />,
      onClick: () => toast.success("Success alert!"),
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomAppBar open={open} setOpen={setOpen} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant="h5" sx={{ ml: 1 }}>
            _aeschyllus
          </Typography>
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {listItems.map((listItem) => (
            <ListItem
              key={listItem.text}
              text={listItem.text}
              icon={listItem.icon}
              open={open}
              onClick={listItem.onClick}
            />
          ))}

          {/* Nested List Item */}
          <CollapseListItem
            title="Alerts"
            icon={<Notifications />}
            open={open}
            collapse={collapse}
            setCollapse={setCollapse}
            nestedListItems={nestedListItems}
          />
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {props.children}
      </Box>
    </Box>
  );
};

export default Sidenav;
