import { hover } from "@testing-library/user-event/dist/hover";
import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase";

export default function Logout() {
  const { currentUser } = useContext(AuthContext);
  const handleSubmit = () => {
    if (currentUser) {
      signOut(auth);
    }
    window.location.reload();
  };

  return (
    <div
      className="logout"
      onClick={handleSubmit}
      style={{
        display: "flex",
        padding: "30px",
        gap: "0.7rem",
        color: "red",
        hover: "transition: all 0.15s ease-in-out",
      }}
    >
      <div className="logouticon">
        <FiLogOut />
      </div>
      <div className="logouttext" style={{ cursor: "pointer" }}>
        Logout
      </div>
    </div>
  );
}
