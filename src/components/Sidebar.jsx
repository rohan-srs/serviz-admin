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

  const links1 = [
    {
      text: "Dashboard",
      icon: MdSpaceDashboard,
      active: true,
      linkz: "/Dashboard",
    },
    {
      text: "Users",
      icon: FaUsers,
      active: false,
      linkz: "/Users",
    },
    {
      text: "All Projects",
      icon: BsArchiveFill,
      active: false,
      linkz: "/AllProjects",
    },
    {
      text: "Settings",
      icon: RiSettings5Fill,
      active: false,
      linkz: "/Settings",
    },
  ];
  const links2 = [
    {
      text: "Requests",
      icon: FaLightbulb,
      active: false,
      linkz: "/Requests",
    },
    {
      text: "Projects",
      icon: BsFillFileEarmarkCodeFill,
      active: false,
      linkz: "/Projects",
    },
  ];
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
        icon = {<MdSpaceDashboard/>}
        link = {'/users'}/>
      <Button
        name={"AllProjects"}
        icon = {<MdSpaceDashboard/>}
        link = {'/AllProjects'}/>
      <Button
        name={"Settings"}
        icon = {<MdSpaceDashboard/>}
        link = {'/Settings'}/>
      <Button
        name={"Requests"}
        icon = {<MdSpaceDashboard/>}
        link = {'/Requests'}/>
      <Button
        name={"Projects"}
        icon = {<MdSpaceDashboard/>}
        link = {'/Projects'}/>
            
      </div>
    </div>
  );
}
