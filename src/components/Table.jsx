import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import "../scss/components/table.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "regno", headerName: "Register No", width: 100 },
  { field: "Name", headerName: "Name", width: 150 },
  {
    field: "class",
    headerName: "Class",
    width: 90,
  },
  {
    field: "groupid",
    headerName: "Group ID",
    description: "This column has the Group ID",
    sortable: false,
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    regno: "2062025",
    Name: "Jon",
    class: "AIML",
    groupid: "G2062025AIML",
  },
  {
    id: 2,
    regno: "2062025",
    Name: "Jon",
    class: "AIML",
    groupid: "G2062025AIML",
  },
  {
    id: 3,
    regno: "2062025",
    Name: "Jon",
    class: "AIML",
    groupid: "G2062025AIML",
  },
];

const Table = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
          </div>
        );
      },
    },
  ];
  return (
    
    <div className="table" style={{ height: 550, width: "100%" }}>
      <DataGrid
        sx={{
          borderColor: "black",
        }}
        rows={rows}
        getRowId={(rows) => rows.id}
        columns={columns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default Table;
