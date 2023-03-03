import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import "../scss/components/projectstable.scss";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import ProjectsPopup from "./ProjectsPopup";

const columns = [
  { field: "project_title", headerName: "Project Title", width: 150 },
  { field: "year", headerName: "Year", width: 150 },
  {
    field: "classname",
    headerName: "Class",
    width: 90,
  },
  {
    field: "grp_id",
    headerName: "Group ID",
    description: "This column has the Group ID",
    sortable: false,
    width: 160,
  },
];

var cellVal;

const ProjectsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        setData(list);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (cellValues) => {
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              onClick={(e) => {
                Toggle();
                e.stopPropagation();
                cellVal=cellValues;
                //console.log("Projects Table", cellValues);
              }}
            >
              View
            </div>
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
        rows={data}
        getRowId={(rows) => rows.id}
        columns={columns.concat(actionColumn)}
        pageSize={12}
        rowsPerPageOptions={[12]}
        checkboxSelection
        components={{Toolbar: GridToolbar}}
      />
      <ProjectsPopup show={modal} title="My Modal" close={Toggle} CallValll={cellVal}/>
    </div>
  );
};

export default ProjectsTable;
