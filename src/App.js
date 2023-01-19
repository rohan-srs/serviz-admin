import { useState } from "react";
import { Routes, Route } from "react-router-dom";
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

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/allprojects" element={<AllProjects />} />
              <Route path="/allusers" element={<AllUsers />} />
              <Route path="/pastprojects" element={<PastProjects />} />
              <Route path="/addnewuser" element={<AddNewUser />} />
              <Route path="/currentprojects" element={<CurrentProjects />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
