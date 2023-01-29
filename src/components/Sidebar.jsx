import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsArchiveFill } from "react-icons/bs";
import { RiSettings5Fill } from "react-icons/ri";
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";

import Button from "./sidebar/Button";
import Logout from "./sidebar/Logout";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="appname">ServiZ</div>

      <div className="links">
        <Button name={"Dashboard"} icon={<MdSpaceDashboard />} route={"/"} />
        <Button name={"Users"} icon={<FaUsers />} route={"/users"} />
        <Button
          name={"AllProjects"}
          icon={<BsArchiveFill />}
          route={"/allprojects"}
        />
        <Button name={"Manage"} icon={<RiSettings5Fill />} route={"/manage"} />
        <Button name={"Requests"} icon={<FaLightbulb />} route={"/requests"} />
        <Button
          name={"Projects"}
          icon={<BsFillFileEarmarkCodeFill />}
          route={"/projects"}
        />
      </div>
      <Logout />
    </div>
  );
}
