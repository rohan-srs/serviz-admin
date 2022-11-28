import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button({ name, icon, route }) {
  const navigate = useNavigate();
  return (
    <div className="button" role="button" onClick={() => navigate(route)}>
      <div className="icon">{icon}</div>
      <div className="text">{name}</div>
    </div>
  );
}
