import React, { useState } from "react";
import "../scss/components/requestcard.scss";
import Button from "@mui/material/Button";

const RequestsCard = ({ title, content }) => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
  };

  const handleReject = () => {
    setIsAccepted(false);
  };

  return (
    <div className={`card ${isAccepted ? "accepted" : "rejected"}`}>
      <h2 className="title">{title}</h2>
      <p className="content">{content}</p>
      <div className="card-actions">
        <Button
          onClick={handleAccept}
          variant="outlined"
          className="acceptButton"
        >
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
