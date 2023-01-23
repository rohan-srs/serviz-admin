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

const CardList = () => {
  const [cards] = useState([
    { id: 1, title: "Card 1", content: "Content 1" },
    { id: 2, title: "Card 2", content: "Content 2" },
    { id: 3, title: "Card 3", content: "Content 3" },
    { id: 1, title: "Card 1", content: "Content 1" },
    { id: 2, title: "Card 2", content: "Content 2" },
    { id: 3, title: "Card 3", content: "Content 3" },
    { id: 1, title: "Card 1", content: "Content 1" },
    { id: 2, title: "Card 2", content: "Content 2" },
    { id: 3, title: "Card 3", content: "Content 3" },
  ]);

  return (
    <div className="scrollable-container">
      <div className="card-list">
        {cards.map((card) => (
          <RequestsCard
            key={card.id}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
