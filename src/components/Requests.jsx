import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MyStyledCard from "./RequestCard";
import CardList from "./RequestCard";

export default function Requests() {
  return (
    <div className="requests_out">
      <div className="requsts_side">
        <Sidebar />
      </div>
      <div className="requests_main">
        <Navbar />
        <div className="widgets">
          <CardList />
        </div>
      </div>
    </div>
  );
}
