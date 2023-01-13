import React, { useState } from "react";
import "./NotificationPopup.css";

function Modal() {
  return (
    <div className="dropdown-menu">
      <ul>
        <DropdownItem />
      </ul>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <a>{props.text}</a>
    </li>
  );
}

export default Modal;
