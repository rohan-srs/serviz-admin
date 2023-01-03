import React from "react";
import Navbar from "./Navbar";
import "../scss/components/dashboard.scss";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import Chart from "./Chart";

export default function Dashboard() {
  return (
    <div className="Out">
      <div className="Dashboard-side">
        <Sidebar />
      </div>
      <div className="Dashboard-main">
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
