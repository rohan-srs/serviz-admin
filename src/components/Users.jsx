import "../scss/components/users.scss";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Table from "./Table";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const Users = () => {
  const handleAdd = async (e) => {
    e.preventDefault();

    const res = await addDoc(collection(db, "users"), {
      name: "Hola",
      reg_no: "2062025",
    });

    console.log(res.id);
  };
  return (
    <div className="users">
      <Sidebar />
      <div className="users-in">
        <Navbar />

        <div className="user-listContainer">
          <button onClick={handleAdd}>Add</button>
          <div className="listTile">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
