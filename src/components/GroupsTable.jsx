import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import "../scss/components/table.scss";
import { useState } from "react";
import GroupsPopup from "./GroupsPopup.jsx";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  /*{ field: "name", headerName: "Name", width: 150 },
  {
    field: "classname",
    headerName: "Class",
    width: 150,
  },*/
  {
    field: "grp_id",
    headerName: "Group ID",
    description: "This column has the Group ID",
    width: 200,
  },
  {
    field: "faculty_name",
    headerName: "Faculty",
    width: 200,
  },
  {
    field: "members",
    headerName: "Students",
    width: 200,
  },
];

var CellValll;
const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "group"));
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
  //var CellValll;
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
                CellValll = cellValues;
                //console.log(CellValll.row.name);
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
      <GroupsPopup show={modal} title="My Modal" close={Toggle} CallValll={CellValll}/>
    </div>
  );
};
//CallValll={CellValll}
export default Table;