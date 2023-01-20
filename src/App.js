import { useState , useContext} from "react";
import {Routes, Route ,Navigate, BrowserRouter} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import AllProjects from "./scenes/AllProjects";
import CurrentProjects from "./scenes/CurrentProjects";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import PastProjects from "./scenes/PastProjects";
import AddNewUser from "./scenes/AddNewUser";
import AllUsers from "./scenes/AllUsers";
import Login from "./scenes/login/Login";
import {AuthContext, AuthContextProvider} from "./context/AuthContext";




function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const { currentUser } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    console.log("User: ", currentUser);
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthContextProvider>
        <BrowserRouter>
        <div>
        <Routes><Route path="/login" element={<Login/>}/></Routes>
        </div>
        <div className="app">
          
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            
            <Routes>
              <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/allprojects" element={<ProtectedRoute><AllProjects /></ProtectedRoute>} />
              <Route path="/allusers" element={<ProtectedRoute><AllUsers /></ProtectedRoute>} />
              <Route path="/pastprojects" element={<PastProjects />} />
              <Route path="/addnewuser" element={<AddNewUser />} />
              <Route path="/currentprojects" element={<CurrentProjects />} />
              <Route path="/calendar" element={<Calendar />} />
              
            </Routes>
            
  
          </main>
        </div>
        </BrowserRouter>
        </AuthContextProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
