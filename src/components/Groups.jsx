import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../scss/components/groups.scss";
import React, { useState } from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik, Field } from "formik";
import * as yup from "yup";
import GroupsTable from "./GroupsTable";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function Groups({ title, children }) {
  const [selectedOptions, setSelectedOptions] = useState(["", "", "", "", ""]);
  const [expanded, setExpanded] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [map, setMap] = useState({});

  const options = {
    dropdown1: ["Option 1", "Option 2", "Option 3", "Option 4"],
  };

  const handleFormSubmit = async (values) => {};
  return (
    <div className="Out">
      <div className="Dashboard-side">
        <Sidebar />
      </div>
      <div className="Dashboard-main">
        <Navbar />

        { <div className="user-listContainer">
          <div className="listTile">
            <GroupsTable />
          </div>
        </div> }
      </div>
    </div>
  );
};

const checkoutSchema = yup.object().shape({
  classname: yup.string().required("required"),
  // address2: yup.string().required("required"),
});

const initialValues = {
  dropdown1: "",
  // address2: "",
};
