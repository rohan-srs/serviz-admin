import React from "react";
import Button from "./sidebar/Button";
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="appname">ServiZ</div>
      <div className="links">
        <Button
        name={"Dashboard"}
        icon = {<MdSpaceDashboard/>}
        link = {'/dashboard'}/>
      </div>
    </div>
  );
}
