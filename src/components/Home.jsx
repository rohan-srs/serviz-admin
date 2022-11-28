import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../AuthProvider";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import Sidebar from "./Sidebar";

function Home() {
  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const clickLogin = () => {
    if (currentUser) {
      signOut(auth);
    } else {
      navigate("/login");
    }
  };

  const clickSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="mainContainer">
      {currentUser && <p>Welcome, {username}</p>}
      <div className="buttons">
        <button onClick={clickLogin}>
          {currentUser ? <Sidebar /> : "Login"}
        </button>
        {!currentUser && <button onClick={clickSignup}>Sign Up</button>}
      </div>
    </div>
  );
}

export default Home;
