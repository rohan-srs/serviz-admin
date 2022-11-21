import { React, useState } from "react";
import "../scss/components/login.scss";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      signInWithEmailAndPassword(auth, email, password).catch((error) =>
        console.log(error)
      );
      navigate("/");
    }
    onRegister();
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
        </form>
      </div>
    </div>
  );
};

export default Login;
