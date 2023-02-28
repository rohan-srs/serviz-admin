import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useState, useEffect } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Shamanth1",
  "Shamanth2",
  "Divya",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
export default function Editpopup(props) {
  const CallValll = props.CallValll;
  const show = props.show;
  const close = props.close;
  // if (CallValll?.row?.teacher.length === 1) {
  //   console.log("1");
  // } else {
  //   console.log("2");
  // }
  const rtvalue0 = [CallValll?.row?.teacher];
  const [personName, setPersonName] = useState();
  const [checked, setChecked] = useState();
  useEffect(() => {
    if (rtvalue0.length === 1) {
      const rtvalue1 = rtvalue0[0];
      const rtvalue2 = rtvalue0[1];
      setPersonName([rtvalue1, rtvalue2]);
    } else {
      setPersonName([rtvalue0]);
    }
  }, [props.CallValll]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <>
      {show ? (
        <div className="modalContainer" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2>PopUp</h2>
            </header>
            <main className="modal_content">
              <div>
                Class : {CallValll.row.id}
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">
                    Teachers
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Teachers" />}
                    renderValue={(selected) => selected.join(",")}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </main>
            <footer className="modal_footer">
              <button className="modal-close" onClick={() => close()}>
                Cancel
              </button>

              <button className="submit">Submit</button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
}
