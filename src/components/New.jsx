import "../scss/components/new.scss";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Button from "@mui/material/Button";

import { InputLabel, MenuItem, Select } from "@mui/material";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { StudentInputs } from "../formSourceStudent";
import { TeacherInputs } from "../formSourceTeacher";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const New = ({}) => {
  const [data, setData] = useState("");
  const [currentValue, setCurrentValue] = useState("Student");

  // useEffect(() => {
  //   const uploadFile = () => {
  //     const name = new Date().getTime() + file.name;

  //     console.log(name);
  //     const storageRef = ref(storage, file.name);
  //     const uploadTask = uploadBytesResumable(storageRef, file);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //         setPerc(progress);
  //         switch (snapshot.state) {
  //           case "paused":
  //             console.log("Upload is paused");
  //             break;
  //           case "running":
  //             console.log("Upload is running");
  //             break;
  //           default:
  //             break;
  //         }
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           setData((prev) => ({ ...prev, img: downloadURL }));
  //         });
  //       }
  //     );
  //   };
  //   file && uploadFile();
  // }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    const role = currentValue;

    setData({ ...data, [id]: value, role: role });
  };

  console.log(data);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", result.user.uid), {
        ...data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="out">
      <div className="new">
        <Sidebar />
      </div>
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
          <div>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="role-select-label"
              id="demo-simple-select"
              value={currentValue}
              label="Role"
              onChange={(e) => {
                console.log("Current Value", e.target.value);
                setCurrentValue(e.target.value);
              }}
            >
              <MenuItem value={"student"}>Student</MenuItem>
              <MenuItem value={"teacher"}>Teacher</MenuItem>
            </Select>
          </div>
        </div>

        {currentValue === "student" ? (
          <div className="bottom">
            <div className="right">
              <form onSubmit={handleAdd}>
                {StudentInputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input
                      id={input.id}
                      type={input.type}
                      placeholder={input.placeholder}
                      onChange={handleInput}
                    />
                  </div>
                ))}

                <Button
                  variant="outlined"
                  className="createuserbtn"
                  type="submit"
                >
                  Create User
                </Button>
              </form>
            </div>
          </div>
        ) : (
          <div className="bottom">
            <div className="right">
              <form onSubmit={handleAdd}>
                {TeacherInputs.map((input) => (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input
                      id={input.id}
                      type={input.type}
                      placeholder={input.placeholder}
                      onChange={handleInput}
                    />
                  </div>
                ))}

                <Button
                  variant="outlined"
                  className="createuserbtn"
                  type="submit"
                >
                  Create User
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default New;
