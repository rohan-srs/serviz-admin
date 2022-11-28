import "./scss/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./AuthProvider";
import Users from "./components/Users";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/sidebar" element={<Sidebar />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
            <Route exact path="/Users" element={<Users />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
