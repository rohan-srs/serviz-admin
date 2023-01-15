import { Box, Button, TextField, Select, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const Form = () => {
  const [currentValue, setCurrentValue] = useState([]);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.Password
      );
      await setDoc(doc(db, "users", result.user.uid), {
        ...values,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

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
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName}
                name="Name"
                error={!!touched.fullName && !!errors.fullName}
                helperText={touched.fullName && errors.fullName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Register No"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.RegisterNo}
                name="RegisterNo"
                error={!!touched.RegisterNo && !!errors.RegisterNo}
                helperText={touched.RegisterNo && errors.RegisterNo}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />

              <Select
                name="classname"
                label="classname"
                value={values.classname}
                style={{}}
                sx={{ gridColumn: "span 4" }}
                onChange={(e) => {
                  console.log("Current Value", e.target.value);
                  setCurrentValue(e.target.value);
                  values.classname = e.target.value;
                }}
                onBlur={handleBlur}
              >
                <MenuItem value={"AIML"}>AIML</MenuItem>
                <MenuItem value={"DS"}>DS</MenuItem>
                <MenuItem value={"IOT"}>IOT</MenuItem>
              </Select>

              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Password}
                name="Password"
                error={!!touched.Password && !!errors.Password}
                helperText={touched.Password && errors.Password}
                sx={{ gridColumn: "span 4" }}
              />
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              /> */}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  Name: yup.string().required("required"),
  RegisterNo: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  classname: yup.string().required("required"),
  Password: yup.string().required("required"),
  // address2: yup.string().required("required"),
});
const initialValues = {
  Name: "",
  RegisterNo: "",
  email: "",
  classname: "",
  Password: "",
  // address2: "",
};

export default Form;
