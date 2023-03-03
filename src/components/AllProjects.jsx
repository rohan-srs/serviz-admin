import { React, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ProjectsTable from "./ProjectsTable";
import Button from "@mui/material/Button";
import CurrentProjectsTable from "./CurrentProjectsTable";

export default function AllProjects() {
  const [TableType, setTableType] = useState("tab1");
  //Functions to handle tabswitch
  const handleTab1 = () => {
    setTableType("tab1");
  };
  const handleTab2 = () => {
    setTableType("tab2");
  };
  const handleTab3 = () => {
    setTableType("tab3");
  };

  return (
    <div className="allprojects">
      <div className="allprojects-side">
        <Sidebar />
      </div>

      <div className="allprojects-in">
        <Navbar />

        <div className="allprojects-table">
          <div className="widgets">
            <Button
              variant="outlined"
              className={TableType === "tab1" ? "active" : ""}
              onClick={handleTab1}
            >
              All Projects
            </Button>
            <Button
              variant="outlined"
              className={TableType === "tab2" ? "active" : ""}
              onClick={handleTab2}
            >
              Current Projects
            </Button>
            <Button
              variant="outlined"
              className={TableType === "tab3" ? "active" : ""}
              onClick={handleTab3}
            >
              Past Projects
            </Button>
          </div>

          <div className="outlet">
            {TableType === "tab1" ? (
              <ProjectsTable />
            ) : TableType === "tab2" ? (
              <CurrentProjectsTable />
            ) : (
              <ProjectsTable />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
