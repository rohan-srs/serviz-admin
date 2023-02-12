import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import RequestsCard from "./RequestCard";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { Button } from "@mui/material";

export default function Requests() {
  const [Data, setData] = useState([]);

  const statuslist = [];
  const pTitleList = [];
  const gIDlist = [];
  const [status, setstatus] = useState([]);
  const [pTitle, setpTitle] = useState([]);
  const [grp_id, setgID] = useState([]);
  const fetchData = async () => {
    const docRef = doc(db, "meta", "project-ideas");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());

      Object.values(Data).forEach((value) => {
        statuslist.push(value.status);
        pTitleList.push(value.pTitle);
        gIDlist.push(value.grp_id);
      });
      setstatus(statuslist);
      setpTitle(pTitleList);
      setgID(gIDlist);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <div className="requests_out">
      <div className="requsts_side">
        <Sidebar />
      </div>
      <div className="requests_main">
        <Navbar />
        <div className="widgets">
          <div className="fetchButton">
            <Button
              onClick={fetchData}
              variant="outlined"
              className="fetchButtonComp"
            >
              Fetch Projects
            </Button>
          </div>

          {status.map((item, index) => (
            <div className="scrollable-container-1">
              <div className="card-list-1">
                <RequestsCard
                  key={grp_id[index]}
                  title={pTitle[index]}
                  content={item}
                  gid={grp_id[index]}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
