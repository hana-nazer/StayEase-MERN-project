import React from "react";
import Logo from "../components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const role = props.role;
  let navbarColorClass;

  if (role === "admin") {
    navbarColorClass = "bg-gray-700";
  } else if (role === "owner") {
    navbarColorClass = "bg-teal-900";
  } else if (role === "user") {
    navbarColorClass = "bg-cyan-800";
  } else {
    navbarColorClass = "";
  }
  
  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999
  };

  return (
    <nav className={`flex items-center justify-between p-3 ${navbarColorClass}`} style={navbarStyle}>
      <Logo />

      <div className="flex items-center">
        <span className="mr-2 text-white">{props.name}</span>
        <FontAwesomeIcon
          icon={faSignOutAlt}
          className="w-5 h-5 text-white fill-current"
        />
      </div>
    </nav>
  );
}

export default Navbar;
