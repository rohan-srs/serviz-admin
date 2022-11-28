import React from "react";
import { List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Navbar from "./Navbar";
import "../scss/components/users.scss";
import Sidebar from "./Sidebar";

export default function Users() {
  return (
    <div className="users">
      <Sidebar />
      <div className="users-in">
        <Navbar />
        <div className="user-list"></div>
      </div>
    </div>
  );
}
