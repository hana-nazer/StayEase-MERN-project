import React from "react";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const navigate = useNavigate();
  const role = props.role;
  const name = props.name;
  const page = props.page
  console.log(role);

  let navbarColorClass;

  if (role === "admin") {
    navbarColorClass = "bg-gray-700";
  } else if (role === "owner") {
    navbarColorClass = "bg-teal-900";
  } else if (role === "user") {
    navbarColorClass = "bg-cyan-800";
  } else {
    navbarColorClass = "bg-black";
  }

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
  };

  const logoutHandler = (role) => {
    let tokenKey;
    let redirectPath;
    if (role === "admin") {
      tokenKey = "admin_token";
      redirectPath = "/admin/login";
    } else if (role === "owner") {
      tokenKey = "owner_token";
      redirectPath = "/owner/login";
    } else {
      tokenKey = "user_token";
      redirectPath = "/";
    }
    localStorage.removeItem(tokenKey);
    navigate(redirectPath);
  };

  return (
    <nav
      className={`flex items-center justify-between p-3 ${navbarColorClass}`}
      style={navbarStyle}
    >
      <Logo />
      {!page &&(<>
        <div className="flex items-center">
        <span className="mr-2 text-white">{name}</span>
        <FontAwesomeIcon
          onClick={() => logoutHandler(role)}
          icon={faSignOutAlt}
          className="w-5 h-5 text-white fill-current"
          style={{ cursor: "pointer" }}
        />
      </div>
      </>)}

     
    </nav>
  );
}

export default Navbar;
