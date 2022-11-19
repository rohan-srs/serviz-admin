import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import "./scss/style.scss"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Login } from "./components/Login";

function App() {
  return (
    <div className="app">
      <Login />
    </div>
  )


}

export default App;
