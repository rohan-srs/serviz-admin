import React from "react";

import { useNavigate } from "react-router-dom";

export default function Button({ name, icon, link }) {
  const navigate = useNavigate();
  return (
    <div className="button" onClick={() => navigate({ link })}>
      <div className="icon">{icon}</div>
      <div className="text">{name}</div>
    </div>
  );
}
