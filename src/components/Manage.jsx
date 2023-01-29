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
import { Formik } from "formik";
import * as yup from "yup";

export default function Manage({ title, children }) {
  const [expanded, setExpanded] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);
  const isNonMobile = useMediaQuery("(min-width:600px)");

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
                onClick={() => setExpanded(!expanded)}
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
                    <Formik
                      onSubmit={handleFormSubmit}
                      initialValues={initialValues}
                      validationSchema={checkoutSchema}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <Box
                            // display="grid"
                            // gap="30px"
                            // gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                              "& > div": {
                                gridColumn: isNonMobile ? undefined : "span 4",
                              },
                            }}
                          >
                            <div className="select-row">
                              <h3>Class 1</h3>
                              <FormControl style={{ minWidth: 200 }}>
                                <InputLabel id="select-label">
                                  Select Teacher
                                </InputLabel>
                                <Select
                                  defaultValue="AIML"
                                  name="classname"
                                  label="classname"
                                  value={values.classname}
                                  style={{ color: "white" }}
                                  sx={{ gridColumn: "span 4" }}
                                  onChange={(e) => {
                                    console.log(
                                      "Current Value",
                                      e.target.value
                                    );
                                    setCurrentValue(e.target.value);
                                    values.classname = e.target.value;
                                  }}
                                  onBlur={handleBlur}
                                >
                                  <MenuItem value={"AIML"}>AIML</MenuItem>
                                  <MenuItem value={"DS"}>DS</MenuItem>
                                  <MenuItem value={"IOT"}>IOT</MenuItem>
                                </Select>
                              </FormControl>
                            </div>

                            <div className="select-row">
                              <h3>Class 1</h3>
                              <FormControl style={{ minWidth: 200 }}>
                                <InputLabel id="select-label">
                                  Select Teacher
                                </InputLabel>
                                <Select
                                  defaultValue="AIML"
                                  name="classname"
                                  label="classname"
                                  value={values.classname}
                                  style={{ color: "white" }}
                                  sx={{ gridColumn: "span 4" }}
                                  onChange={(e) => {
                                    console.log(
                                      "Current Value",
                                      e.target.value
                                    );
                                    setCurrentValue(e.target.value);
                                    values.classname = e.target.value;
                                  }}
                                  onBlur={handleBlur}
                                >
                                  <MenuItem value={"AIML"}>AIML</MenuItem>
                                  <MenuItem value={"DS"}>DS</MenuItem>
                                  <MenuItem value={"IOT"}>IOT</MenuItem>
                                </Select>
                              </FormControl>
                            </div>

                            <div className="select-row">
                              <h3>Class 1</h3>
                              <FormControl style={{ minWidth: 200 }}>
                                <InputLabel id="select-label">
                                  Select Teacher
                                </InputLabel>
                                <Select
                                  defaultValue="AIML"
                                  name="classname"
                                  label="classname"
                                  value={values.classname}
                                  style={{ color: "white" }}
                                  sx={{ gridColumn: "span 4" }}
                                  onChange={(e) => {
                                    console.log(
                                      "Current Value",
                                      e.target.value
                                    );
                                    setCurrentValue(e.target.value);
                                    values.classname = e.target.value;
                                  }}
                                  onBlur={handleBlur}
                                >
                                  <MenuItem value={"AIML"}>AIML</MenuItem>
                                  <MenuItem value={"DS"}>DS</MenuItem>
                                  <MenuItem value={"IOT"}>IOT</MenuItem>
                                </Select>
                              </FormControl>
                            </div>

                            <div className="select-row">
                              <h3>Class 1</h3>
                              <FormControl style={{ minWidth: 200 }}>
                                <InputLabel id="select-label">
                                  Select Teacher
                                </InputLabel>
                                <Select
                                  defaultValue="AIML"
                                  name="classname"
                                  label="classname"
                                  value={values.classname}
                                  style={{ color: "white" }}
                                  sx={{ gridColumn: "span 4" }}
                                  onChange={(e) => {
                                    console.log(
                                      "Current Value",
                                      e.target.value
                                    );
                                    setCurrentValue(e.target.value);
                                    values.classname = e.target.value;
                                  }}
                                  onBlur={handleBlur}
                                >
                                  <MenuItem value={"AIML"}>AIML</MenuItem>
                                  <MenuItem value={"DS"}>DS</MenuItem>
                                  <MenuItem value={"IOT"}>IOT</MenuItem>
                                </Select>
                              </FormControl>
                            </div>
                          </Box>
                          <Box display="flex" justifyContent="end" mt="20px">
                            <Button
                              type="submit"
                              className="assign-teachers-button"
                              variant="contained"
                            >
                              Assign
                            </Button>
                          </Box>
                        </form>
                      )}
                    </Formik>
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
  classname: "",
  // address2: "",
};
