import React from "react";
import Logo from "../components/Logo";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  const navigate = useNavigate();
  const role = props.role;
  const name = props.name;
  const search = props.search;

  let navbarColorClass;
  if (role === "admin") {
    navbarColorClass = "bg-gray-700";
  } else if (role === "owner") {
    navbarColorClass = "bg-teal-900";
  } else {
    navbarColorClass = "bg-dark-green";
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

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
  };

  return (
    <nav
      className={`flex justify-between items-center p-3 ${navbarColorClass}`}
      style={navbarStyle}
    >
      <Logo />
      <div className="flex items-center ">
        {search && (
          <>
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleSearch}
                  className="h-8 px-2 py-1 pr-8 text-black bg-white focus:outline-none"
                  style={{ lineHeight: "1rem", border: "none" }}
                />

                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute w-4 h-4 text-gray-500 fill current top-1 right-2"
                  style={{ cursor: "pointer", marginTop: "0.3rem" }}
                />
              </div>
            </div>
          </>
        )}
        <div className="flex items-center ml-10">
          {!role ? (
            <Link to="/login" className="text-white">
              Login/Signup
            </Link>
          ) : (
            <>
              <span className="mr-2 text-white">{name}</span>
              <FontAwesomeIcon
                onClick={() => logoutHandler(role)}
                icon={faSignOutAlt}
                className="w-5 h-5 text-white fill-current"
                style={{ cursor: "pointer", marginRight: "10px" }}
              />
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
