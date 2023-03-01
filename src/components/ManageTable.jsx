import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import "../scss/components/table.scss";
import { useState } from "react";
import Editpopup from "./manage/Editpopup";
import { useEffect } from "react";
import { collection, getDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { MapsHomeWork } from "@mui/icons-material";

const columns = [
  { field: "id", headerName: "Class", width: 70 },
  { field: "teacher", headerName: "Teachers", width: 300 },
];
var CellValll;
const ManageTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(
          collection(db, "meta", "class2", "sections1")
        );
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
                CellValll = cellValues;
                console.log(CellValll);
              }}
            >
              Edit
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
        getRowId={(rows) => rows.teacher}
        columns={columns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
      <Editpopup
        show={modal}
        title="My Modal"
        close={Toggle}
        CallValll={CellValll}
      />
    </div>
  );
};

export default ManageTable;
