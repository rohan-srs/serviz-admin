import { React, useState } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsArchiveFill } from "react-icons/bs";
import { RiSettings5Fill } from "react-icons/ri";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Links from "./Links";
import { whiteText, redAccent } from "../utils";
import Button from "./sidebar/Button";

export default function Sidebar() {
  const [activeStatus, setActiveStatus] = useState(false);

 
  
  return (
    <div className="sidebar">
      <div className="appname">ServiZ</div>
      <div className="links">
      <Button
        name={"Dashboard"}
        icon = {<MdSpaceDashboard/>}
        link = {'/dashboard'}/>
      <Button
        name={"Users"}
        icon = {<FaUsers/>}
        link = {'/users'}/>
      <Button
        name={"AllProjects"}
        icon = {<BsArchiveFill/>}
        link = {'/AllProjects'}/>
      <Button
        name={"Settings"}
        icon = {<RiSettings5Fill/>}
        link = {'/Settings'}/>
      <Button
        name={"Requests"}
        icon = {<FaLightbulb/>}
        link = {'/Requests'}/>
      <Button
        name={"Projects"}
        icon = {<BsFillFileEarmarkCodeFill/>}
        link = {'/Projects'}/>
            
      </div>
    </div>
  );
}
