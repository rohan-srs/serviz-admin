import "../scss/components/users.scss";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Table from "./Table";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  const navigateToaddnewuser = () => {
    // 👇️ navigate to /contacts
    navigate("/addnewuser");
  };
  return (
    <div className="Out">
      <div className="Dashboard-side">
        <Sidebar />
      </div>
      <div className="Dashboard-main">
        <Navbar />

        <div className="user-listContainer">
          <Button
            variant="outlined"
            className="addButton"
            onClick={navigateToaddnewuser}
          >
            Add
          </Button>
          <div className="listTile">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
