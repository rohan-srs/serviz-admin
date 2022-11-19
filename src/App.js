import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import "./scss/style.scss"
import {BrowserRouter as Router,Routes,Route,Switch} from "react-router-dom"
import Users from "./components/Users";
import Projects from "./components/Projects";
import AllProjects from "./components/AllProjects";
import Settings from "./components/Settings";
import Requests from "./components/Requests";


function App() {
  return(
    
    <div className="app">
    <Router>
    <Sidebar />
    
      <Routes>
        <Route path="/Dashboard" exact element={<Dashboard/>} />
          <Route path="/AllProjects" element={<AllProjects/>} />
          <Route path='/Settings' element={<Settings/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/Users' element={<Users/>} />
        <Route path='/Requests' element={<Requests/>} />
        
      </Routes>
    </Router>
  </div>
  )
  
  
}

export default App;
