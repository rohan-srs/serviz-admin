import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../scss/components/manage.scss";
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
import ManageTable from "./ManageTable";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function Manage({ title, children }) {
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
      <div className="Manage-side">
        <Sidebar />
      </div>
      <div className="Manage-main">
        <Navbar />
        <div className="widgets">
          <section className="section1">
            <div className="expandable-section">
              <div
                className="expandable-section-header"
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                {
                  <div className="section1-out">
                    <h2>Assign Teachers</h2>
                    <div
                      className={`arrow ${expanded ? "expanded" : "collapsed"}`}
                    >
                      <BsArrowDownCircleFill />
                    </div>
                  </div>
                }
              </div>
              <div
                className={`expandable-section-content ${
                  expanded ? "expanded" : "collapsed"
                }`}
              >
                {
                  <div className="section1-in">
                    <ManageTable />
                  </div>
                }
              </div>
            </div>
          </section>
          {/* section2 */}
        </div>
      </div>
    </div>
  );
}

const checkoutSchema = yup.object().shape({
  classname: yup.string().required("required"),
  // address2: yup.string().required("required"),
});

const initialValues = {
  dropdown1: "",
  // address2: "",
};
