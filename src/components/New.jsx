import "../scss/components/new.scss";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Button from '@mui/material/Button';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = () => {
  return (
  <div className="new">
    <Sidebar />
    <div className="newContainer">
      <Navbar />
      <div className="top">
        <h1>Add New User</h1>
      </div>
      <div className="bottom">
        <div className="left"><img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" /></div>
        <div className="right"><form >

        <div className="formInput">
            <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className="icon"></DriveFolderUploadOutlinedIcon></label>
            <input type="file" id="file" style={{display:"none"}}></input>
          </div>

          <div className="formInput">
            <label>Name</label>
            <input type="text" placeholder="john doe"></input>
          </div>

          <div className="formInput">
            <label>Reg No.</label>
            <input type="text" placeholder="john doe"></input>
          </div>

          <div className="formInput">
            <label>Email</label>
            <input type="email" placeholder="john doe"></input>
          </div>

          <Button variant="outlined" className="createuserbtn">Create User
          </Button>
          

          </form></div>
      </div>
    </div>
  </div>
  );
};

export default New;