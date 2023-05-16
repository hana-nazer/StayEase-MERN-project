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
  return (
    <nav
      className={`flex items-center justify-between p-3 ${navbarColorClass}`}
    >
      <Logo />

      {/* <span className="mr-2 font-bold text-white">{props.title}</span> */}
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