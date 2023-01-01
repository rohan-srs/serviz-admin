import "../scss/components/new.scss";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Button from '@mui/material/Button';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { setDoc, doc} from "firebase/firestore";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserInputs } from "../formSource";

const New = ({ inputs, title }) => {

  const [data,setData] = useState("");

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({...data, [id]: value })
  }

  console.log(data);


  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(auth,data.email, data.password);
      await setDoc(doc(db, "users", result.user.uid), {
        ...data
      });
    } catch (error) {
      console.log(error)

    }
  };

  const [file, setFile] = useState("");

  console.log(file);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left"><img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" /></div>
          <div className="right">
            <form onSubmit={handleAdd} >

            {
              UserInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id = {input.id} type = {input.type} placeholder = {input.placeholder} onChange={handleInput}/>
                </div>
              ) )
            }

            <Button variant="outlined" className="createuserbtn" type="submit">Create User
            </Button>


          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;