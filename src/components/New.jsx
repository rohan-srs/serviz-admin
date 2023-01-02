import "../scss/components/new.scss";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Button from '@mui/material/Button';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { setDoc, doc} from "firebase/firestore";
import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserInputs } from "../formSource";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data,setData] = useState("");
  const [per, setPerc] = useState(null);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

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

            <div className="formInput">
            <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className="icon"></DriveFolderUploadOutlinedIcon></label>
            <input type="file" id="file" style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}></input>
          </div>

            {
              UserInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id = {input.id} type = {input.type} placeholder = {input.placeholder} onChange={handleInput}/>
                </div>
              ) )
            }

            <Button variant="outlined" className="createuserbtn" type="submit" disabled={per !== null && per<100 }>Create User
            </Button>

          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;