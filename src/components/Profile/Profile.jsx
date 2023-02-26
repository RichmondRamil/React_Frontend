import React from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import "./profile.scss";
const Profile = ({ profileOpen }) => {
  return (
    <div
      className="profile"
      style={{ display: profileOpen ? "block" : "none" }}
    >
      <div className="profile__avatar">
        <img
          src="https://avatars.githubusercontent.com/u/73594655?v=4"
          alt=""
        />
        <div className="profile__avatar-rolename">
          <h3>Richmond Ramil</h3>
          <p>Admin</p>
        </div>
      </div>
      <div className="profile__communication">
        <div className="profile__communication-container">
          <PersonOutlinedIcon />
          <h3>Users</h3>
        </div>
        <div className="profile__communication-container">
          <EmailOutlinedIcon />
          <h3>Inbox</h3>
        </div>
        <div className="profile__communication-container">
          <ChatBubbleOutlineOutlinedIcon />
          <h3>Chat</h3>
        </div>
      </div>
      <div className="profile__settings">
        <div className="profile__settings-container">
          <SettingsOutlinedIcon />
          <h3>Settings</h3>
        </div>
        <div className="profile__settings-container">
          <AttachMoneyOutlinedIcon />
          <h3>Pricing</h3>
        </div>
        <div className="profile__settings-container">
          <HelpOutlineOutlinedIcon />
          <h3>FAQ</h3>
        </div>
      </div>
      <div className="profile__logout">
        <LogoutOutlinedIcon />
        <h3>Logout</h3>
      </div>
    </div>
  );
};

export default Profile;
