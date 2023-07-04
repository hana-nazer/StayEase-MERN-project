import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Sidebar(props) {
  const adminLinks = [
    { to: "/admin/dashboard", label: "Dashboard" },
    { to: "/admin/resorts", label: "Resorts" },
    { to: "/admin/bookings", label: "Bookings" },
    { to: "/admin/requests", label: "Approvals" },
    { to: "/admin/location", label: "Location" },
    { to: "/admin/category", label: "Category" },
  ];

  const ownerLinks = [
    { to: "/owner/", label: "Dashboard" },
    { to: "/owner/resortlist", label: "Resorts" },
    { to: "/owner/bookings", label: "Bookings" },
  ];

  const links = props.role === "admin" ? adminLinks : ownerLinks;
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024); 
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const navigationButtonClassName = "py-4 mt-6  font-semibold text-center ml-6";
  const navigationButtonIcon = showLinks ? (
    "×"
  ) : (
    <FontAwesomeIcon icon={faBars} />
  );

  const sidebarClassName = `fixed flex flex-col items-start justify-start w-48 h-screen mx-auto mt-8 ${
    isSmallScreen && !showLinks
      ? ""
      : props.role === "admin"
      ? "bg-gray-200"
      : "bg-blue-50"
  }`;

  return (
    <div className={sidebarClassName}>
      {isSmallScreen && !showLinks ? (
        <button
          className={navigationButtonClassName}
          onClick={handleToggleLinks}
        >
          {navigationButtonIcon}
        </button>
      ) : (
        links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`py-4 mt-6 ml-10 font-semibold text-center ${
              showLinks ? "bg-gray-200" : ""
            }`}
          >
            {link.label}
          </Link>
        ))
      )}
    </div>
  );
}

export default Sidebar;
