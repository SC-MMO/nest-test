import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BugReportIcon from "@mui/icons-material/BugReport";

import QuizIcon from "@mui/icons-material/Quiz";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from "@mui/icons-material/Info";

import { useNavigate } from "react-router-dom";

interface MenuItemI {
  text: string;
  icon: React.ReactNode;
  link: string;
}

class MenuItem implements MenuItemI {
  text: string;
  icon: React.ReactNode;
  link: string;

  constructor(text: string, icon: React.ReactNode, link: string) {
    this.text = text;
    this.icon = icon;
    this.link = link;
  }
}
const menu1 = [
  new MenuItem("Home", <HomeIcon />, "/"),
  new MenuItem("Products", <ShoppingCartIcon />, "/products"),
  new MenuItem("Posts", <WhatshotIcon />, "/posts"),
  new MenuItem("Test", <BugReportIcon />, "/test"),
];

const menu2 = [
  new MenuItem("FAQ", <QuizIcon />, "/faq"),
  new MenuItem("Contact", <EmailIcon />, "/contact"),
  new MenuItem("About", <InfoIcon />, "/about"),
];

function MenuMap(menu: MenuItemI[]) {
  const navigate = useNavigate();
  return (
    <>
      {menu.map((menuItem: MenuItemI) => (
        <ListItem key={menuItem.text} disablePadding>
          <ListItemButton onClick={() => navigate(`${menuItem.link}`)}>
            <ListItemIcon>{menuItem.icon}</ListItemIcon>
            <ListItemText primary={menuItem.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
}

function Menu() {
  const [open, setOpen] = React.useState(true);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>{MenuMap(menu1)}</List>
      <Divider />
      <List>{MenuMap(menu2)}</List>
    </Box>
  );

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      PaperProps={{ sx: { top: "4rem" } }}
      open={open}
    >
      {DrawerList}
    </Drawer>
  );
}

export { Menu };
