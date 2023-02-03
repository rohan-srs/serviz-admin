import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import RequestsCard from "./RequestCard";
import CardList from "./RequestCard";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default function Requests() {
  const [Data, setData] = useState([]);
  const statuslist = [];
  const pTitleList = [];
  const [status, setstatus] = useState([]);
  const [pTitle, setpTitle] = useState([]);

  let list = [];
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "meta", "project-ideas");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());

        Object.values(Data).forEach((value) => {
          statuslist.push(value.status);
          pTitleList.push(value.pTitle);
        });
        setstatus(statuslist);
        setpTitle(pTitleList);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    // Data.map((anObjectMapped, index) => {
    //   console.log("iooo", anObjectMapped.name);
    // });
    fetchData();
  }, []);
  return (
    <div className="requests_out">
      <div className="requsts_side">
        <Sidebar />
      </div>
      <div className="requests_main">
        <Navbar />
        <div className="widgets">
          {status.map((item, index) => (
            <div className="scrollable-container-1">
              <div className="card-list-1">
                <RequestsCard title={pTitle[index]} content={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
