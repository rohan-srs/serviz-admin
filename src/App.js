import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import "./scss/style.scss"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

function App() {
  return(
    <div className="app">
    <Sidebar />
    <Dashboard />
  </div>
  )
  
  
}

export default App;
