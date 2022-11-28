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
        <Button
          name={"Dashboard"}
          icon={<MdSpaceDashboard />}
          link={"/dashboard"}
        />
        <Button name={"Users"} icon={<FaUsers />} link={"/users"} />
        <Button
          name={"AllProjects"}
          icon={<BsArchiveFill />}
          link={"/AllProjects"}
        />
        <Button
          name={"Settings"}
          icon={<RiSettings5Fill />}
          link={"/Settings"}
        />
        <Button name={"Requests"} icon={<FaLightbulb />} link={"/Requests"} />
        <Button
          name={"Projects"}
          icon={<BsFillFileEarmarkCodeFill />}
          link={"/Projects"}
        />

        <Logout />
      </div>
    </div>
  );
}
