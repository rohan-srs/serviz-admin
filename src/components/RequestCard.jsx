import React, { useEffect, useState } from "react";
import "../scss/components/requestcard.scss";
import Button from "@mui/material/Button";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const RequestsCard = ({ title, content, gid }) => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [arrayField, setArrayField] = useState([]);
  const [map, setMap] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "meta", "project-ideas");
      const data = await getDoc(docRef);
      setMap(data.data());
    };
    fetchData();
  }, []);

  // const updateArrayField = async (index, newValue) => {
  //   const docRef = doc(db, "meta", "project-ideas");
  //   const docSnap = await getDoc(docRef);

  //   const docdata = docSnap.data();
  //   const updatedArray = [...docdata.arrayField];
  //   updatedArray[index] = newValue;
  //   setArrayField(updatedArray);
  //   await docRef.update({ G2062059: updatedArray });
  // };
  const updateMap = async () => {
    setIsAccepted(true);
    const updatedMap = { ...map };

    // modify field in nested map
    updatedMap[gid].status = "new value";
    console.log(updatedMap[gid]);

    const docRef = doc(db, "meta", "project-ideas");
    await updateDoc(docRef, { [gid]: updatedMap[gid] });
  };

  const handleAccept = () => {
    setIsAccepted(true);
  };

  const handleReject = () => {
    setIsAccepted(false);
  };

  return (
    <div className={`card ${isAccepted ? "accepted" : "rejected"}`}>
      <h2 className="title">{title}</h2>
      <h2 className="grp_id">{gid}</h2>
      <p className="content">{content}</p>

      <div className="card-actions">
        <Button onClick={updateMap} variant="outlined" className="acceptButton">
          Accept
        </Button>
        <Button
          onClick={handleReject}
          variant="outlined"
          className="rejectButton"
        >
          Reject
        </Button>
      </div>
    </div>
  );
};

export default RequestsCard;
