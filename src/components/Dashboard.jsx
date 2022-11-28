import React from "react";
import Navbar from "./Navbar";
import "../scss/components/dashboard.scss";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import Chart from "./Chart";

export default function Dashboard() {
  return (
    <div className="Dashboardout">
      <Sidebar />
      <div className="Dashboard-in">
        <Navbar />
        <div className="widgets">
          <Widget type="Students" />
          <Widget type="Projects" />
          <Widget type="Teachers" />
        </div>
        <div className="charts">
          <Chart />
        </div>
      </div>
    </div>
  );
}
