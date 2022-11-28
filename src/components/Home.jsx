import React, { useState, useContext, useEffect } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

function Home() {
  const { currentUser } = useContext(AuthContext);
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
      <p>Welcome</p>
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
