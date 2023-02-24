import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React from "react";
import "../scss/components/table.scss";
import { useState } from "react";
import Profilepopup from "./users/Profilepopup";
import { useEffect } from "react";
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { MapsHomeWork } from "@mui/icons-material";

const columns = [
  { field: "class", headerName: "Class", width: 70 },
  { field: "teachers", headerName: "Teachers", width: 100 },
];

const ManageTable = () => {
  const [data, setData] = useState([]);
  const [classname, setClassname] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const docRef = doc(db, "meta", "class2");
        await getDoc(docRef).then((data) => {
          // console.log(data.data().sections["A"]);

          // console.log(data.data());
          setClassname(data.data());
        });

        console.log("fitrst", classname);
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
        rows={classname}
        getRowId={(rows) => rows}
        columns={columns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
      />
      <Profilepopup show={modal} title="My Modal" close={Toggle} CellValll />
    </div>
  );
};

export default ManageTable;
