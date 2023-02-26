import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import TranslateIcon from "@mui/icons-material/Translate";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Profile, SearchLinks } from "../index";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  });
  const detectKeyDown = (e) => {
    // console.log("Clicked key: ", e.key);
    // console.log("Clicked code: ", e.code);
    // console.log("Clicked metakey: ", e.metaKey);
    // console.log("Clicked ctrlkey: ", e.ctrlKey);

    if ((e.metaKey || e.ctrlKey) && e.code === "Slash") {
      setIsSearchOpen(true);
    }
  };
  const openCardProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  const openCardSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const openSide = () => {
    setOpenSidebar(!openSidebar);
  };
  const linkItem = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/analytics",
      name: "Analytics",
    },
    {
      path: "/users",
      name: "Users",
    },
    {
      path: "/Products",
      name: "Products",
    },
    {
      path: "/settings",
      name: "Settings",
    },
    {
      path: "/notification",
      name: "Notification",
    },
    {
      path: "/theme",
      name: "Theme",
    },
  ];
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="burger">
          <MenuOpenIcon className="icon" onClick={openSide} />
        </div>
        <div className="search">
          <SearchIcon className="icon" />
          <h3 onClick={openCardSearch}>Search (Ctrl+/)</h3>
          <SearchLinks
            searchOpen={isSearchOpen}
            closeSearch={() => setIsSearchOpen(false)}
          />
        </div>
        <div className="list-icons">
          <TranslateIcon className="icon translate" />
          <NotificationsIcon className="icon notification" />
          <img
            src="https://avatars.githubusercontent.com/u/73594655?v=4"
            alt=""
            onClick={openCardProfile}
          />
          <Profile profileOpen={isProfileOpen} className="nav-profile" />
        </div>
      </div>
      <div
        style={{ display: openSidebar ? "block" : "none" }}
        className="nav-sidebar"
      >
        <div className="list-links">
          {linkItem.map((item, index) => (
            <Link to={item.path} key={index} className="link">
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
