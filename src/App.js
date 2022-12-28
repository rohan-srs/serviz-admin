import "./scss/style.scss";
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import { Login } from "./components/Login";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import New from "./components/New";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    console.log("User: ", currentUser);
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />

          <Route exact path="/addnewuser" element={<New />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
