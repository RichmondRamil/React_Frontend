import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import "./sidebar.scss";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pin, setPin] = useState(false);
  const toggle = () => {
    setPin(!pin);
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const mainItem = [
    {
      path: "/",
      name: "Crm",
      icon: <CircleOutlinedIcon />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <CircleOutlinedIcon />,
    },
  ];
  const menuItem = [
    {
      path: "/users",
      name: "Users",
      icon: <PersonIcon />,
    },
    {
      path: "/products",
      name: "Products",
      icon: <InventoryIcon />,
    },
    {
      path: "/edit",
      name: "Edit",
      icon: <EditIcon />,
    },
    {
      path: "/inbox",
      name: "Inbox",
      icon: <EmailOutlinedIcon />,
    },
    {
      path: "/chat",
      name: "Chat",
      icon: <ChatBubbleOutlineOutlinedIcon />,
    },
  ];
  const settItem = [
    {
      path: "/settings",
      name: "Settings",
      icon: <SettingsOutlinedIcon />,
    },
    {
      path: "/notification",
      name: "Notification",
      icon: <NotificationsNoneOutlinedIcon />,
    },
    {
      path: "/priciing",
      name: "Priciing",
      icon: <AttachMoneyOutlinedIcon />,
    },
    {
      path: "/faq",
      name: "FAQ",
      icon: <HelpOutlineOutlinedIcon />,
    },
    {
      path: "/theme",
      name: "Theme",
      icon: <ColorLensOutlinedIcon />,
    },
  ];
  return (
    <div
      className="sidebar"
      style={{ width: isOpen || pin ? "300px" : "55px" }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="top_section">
        <h1
          className="logo"
          style={{ display: isOpen || pin ? "block" : "none" }}
        >
          TORODB
        </h1>
        <div
          className="bars-container"
          style={{ marginLeft: isOpen ? "50px" : "0px" }}
        >
          <RadioButtonCheckedOutlinedIcon
            className="bars"
            style={{ color: pin ? "#56ca00" : "#fff" }}
            onClick={toggle}
          />
        </div>
      </div>
      <List sx={{ width: "100%", maxWidth: 360 }} className="main-list">
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <DashboardIcon className="icon-home" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open && isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="lists">
            {mainItem.map((main, index) => (
              <Link to={main.path} key={index} className="links">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon className="icon-circle">
                    {main.icon}
                  </ListItemIcon>
                  <ListItemText primary={main.name} />
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Collapse>
      </List>
      <p style={{ display: pin || isOpen ? "block" : "none" }}>APPS & PAGES</p>
      {menuItem.map((item, index) => (
        <Link to={item.path} key={index} className="link">
          <div className="icon">{item.icon}</div>
          <div className="link_text">{item.name}</div>
        </Link>
      ))}
      <p style={{ display: pin || isOpen ? "block" : "none" }}>Settings</p>
      {settItem.map((sett, index) => (
        <Link to={sett.path} key={index} className="link">
          <div className="icon">{sett.icon}</div>
          <div className="link_text">{sett.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
