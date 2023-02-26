import React, { useState } from "react";
import { Link } from "react-router-dom";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import "./searchlinks.scss";

const SearchLinks = ({ searchOpen, closeSearch }) => {
  const [query, setQuery] = useState("");
  const menuLinks = [
    {
      id: 1,
      path: "/",
      name: "CRM",
      icon: <CircleOutlinedIcon className="search-icon" />,
    },
    {
      id: 2,
      path: "/analytics",
      name: "Analytics",
      icon: <CircleOutlinedIcon className="search-icon" />,
    },
    {
      id: 3,
      path: "/users",
      name: "Users",
      icon: <PersonOutlineOutlinedIcon className="search-icon" />,
    },
    {
      id: 4,
      path: "/products",
      name: "Products",
      icon: <Inventory2OutlinedIcon className="search-icon" />,
    },
    {
      id: 5,
      path: "/inbox",
      name: "Inbox",
      icon: <EmailOutlinedIcon className="search-icon" />,
    },
    {
      id: 6,
      path: "/chat",
      name: "Chat",
      icon: <ChatBubbleOutlineOutlinedIcon className="search-icon" />,
    },
    {
      id: 7,
      path: "/settings",
      name: "Settings",
      icon: <SettingsOutlinedIcon className="search-icon" />,
    },
    {
      id: 8,
      path: "/notification",
      name: "Notification",
      icon: <NotificationsNoneOutlinedIcon className="search-icon" />,
    },
    {
      id: 9,
      path: "/pricing",
      name: "Pricing",
      icon: <AttachMoneyOutlinedIcon className="search-icon" />,
    },
    {
      id: 10,
      path: "/faq",
      name: "FAQ",
      icon: <HelpOutlineOutlinedIcon className="search-icon" />,
    },
    {
      id: 11,
      path: "/theme",
      name: "Theme",
      icon: <PaletteOutlinedIcon className="search-icon" />,
    },
  ];

  return (
    <div
      className="search__links"
      style={{ display: searchOpen ? "block" : "none" }}
    >
      <div className="search__links_container">
        <div className="search__links_container-input">
          <label htmlFor="search">Search</label>
          <input
            type="text"
            placeholder="Type something here"
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="close">
            <HighlightOffOutlinedIcon
              className="close-icon"
              onClick={closeSearch}
            />
          </div>
        </div>
        <div className="search__links_container-list">
          <ul>
            {menuLinks
              .filter((link) => link.name.toLowerCase().includes(query))
              .map((links) => (
                <li key={links.id}>
                  {links.icon}
                  <Link to={links.path}>{links.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchLinks;
