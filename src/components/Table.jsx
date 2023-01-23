import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import "../scss/components/table.scss";
import { useState } from "react";
import Profilepopup from "./users/Profilepopup";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "reg_no", headerName: "Register No", width: 100 },
  { field: "name", headerName: "Name", width: 150 },
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

// const rows = [
//   {
//     id: 1,
//     regno: "2062025",
//     Name: "Jon",
//     class: "AIML",
//     groupid: "G2062025AIML",
//   },
//   {
//     id: 2,
//     regno: "2062025",
//     Name: "Jon",
//     class: "AIML",
//     groupid: "G2062025AIML",
//   },
//   {
//     id: 3,
//     regno: "2062025",
//     Name: "Jon",
//     class: "AIML",
//     groupid: "G2062025AIML",
//   },
// ];

const Table = () => {
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
  var CellValll;
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
              onClick={() => {
                Toggle();
                CellValll = cellValues;
                console.log(CellValll);
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
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        components={{Toolbar: GridToolbar}}
      />
      <Profilepopup show={modal} title="My Modal" close={Toggle} CellValll />
    </div>
  );
};

export default Table;
