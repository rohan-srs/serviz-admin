import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ProjectsTable from "./ProjectsTable";
import Button from "@mui/material/Button";

export default function AllProjects() {
  return (
    <div className="allprojects">
      <div className="allprojects-side">
        <Sidebar />
      </div>

      <div className="allprojects-in">
        <Navbar />

        <div className="allprojects-table">
          <div className="widgets">
            <Button variant="outlined" className="TabButton">
              All Projects
            </Button>
            <Button variant="outlined" className="TabButton">
              Current Projects
            </Button>
            <Button variant="outlined" className="TabButton">
              Past Projects
            </Button>
          </div>
          <ProjectsTable />
        </div>
      </div>
    </div>
  );
}
