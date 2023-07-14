import React, { useState, useEffect, useRef } from "react";
import Logo from "../components/Logo";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clearUser } from "../redux/getUserSlice";
import { useDispatch } from "react-redux";
import {
  faSignOutAlt,
  faSearch,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { searchLocation } from "../redux/locationSlice";

function Navbar(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dispatch = useDispatch();
  const role = props.role;
  const name = props.name;
  const search = props.search;
  const position = props.position;
  const page = props.page;

  const chatIconClick = () => {
    if (role === "user") {
      navigate("/chatlist");
    }
    if (role === "owner") {
      navigate("/owner/chatlist");
    }
  };

  let navbarColorClass;
  if (role === "admin") {
    navbarColorClass = "bg-gray-700";
  } else if (role === "owner") {
    navbarColorClass = "bg-teal-900";
  } else {
    if (search) {
      navbarColorClass = "bg-transparent border-b ";
    } else {
      navbarColorClass = "bg-nav-color";
    }
  }

  const navbarStyle = {
    position: !position ? "fixed" : "top",
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
      dispatch(clearUser());
    }

    localStorage.removeItem(tokenKey);
    navigate(redirectPath);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    dispatch(searchLocation(searchTerm));
  };

  return (
    <nav className={`p-3 ${navbarColorClass}`} style={navbarStyle}>
      <div className="container flex justify-between mx-auto">
        <Logo />
        <div className="flex items-center">
          {search && (
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
          )}

          <div className="flex items-center ml-8">
            {!role ? (
              <Link to="/login" className="text-white">
                Login/Signup
              </Link>
            ) : (
              <>
                {role !== "admin" && (
                  <FontAwesomeIcon
                    icon={faComment}
                    size="lg"
                    className="mx-6 text-white"
                    style={{ cursor: "pointer", marginTop: "0.3rem" }}
                    onClick={chatIconClick}
                  />
                )}
                <div className="relative inline-block" ref={dropdownRef}>
                  <span
                    className="mr-2 text-white cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    {name}
                  </span>
                  {showDropdown && (
                    <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                      <Link
                        to="/allBookings"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Bookings
                      </Link>
                    </div>
                  )}
                </div>
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
      </div>
    </nav>
  );
}

export default Navbar;
