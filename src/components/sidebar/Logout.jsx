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
  };

  return (
    <div className="logout" onClick={handleSubmit}>
      <div className="logouticon">
        <FiLogOut />
      </div>
      <div className="logouttext">LOgout</div>
    </div>
  );
}
