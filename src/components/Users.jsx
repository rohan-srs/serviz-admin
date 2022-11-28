import "../scss/components/users.scss";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Table from "./Table";

const Users = () => {
  return (
    <div className="users">
      <Sidebar />
      <div className="users-in">
        <Navbar />

        <div className="user-listContainer">
          <div className="listTile">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
