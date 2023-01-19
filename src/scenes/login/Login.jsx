import "./login.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setErr(true);
    }
  };

  return (
    <div className="Login">
      <div className="formWrapper">
        <span className="logo">SERVIZ</span>
        <span className="title">Login</span>
        <form className="loginForm" onSubmit={handleSubmit}>
          <input
            type="email"
            action=""
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            action=""
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button>Login</button>
          {err && <span>Something went wrong</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
