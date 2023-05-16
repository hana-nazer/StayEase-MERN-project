import React from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  const adminLinks = [
    { to: "/admin/dashboard", label: "Dashboard" },
    { to: "/resorts", label: "Resorts" },
    { to: "/bookings", label: "Bookings" },
    { to: "/admin/requests", label: "Approvals" },
    { to: "/users", label: "Users" },
  ];

  const ownerLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/resorts", label: "Resorts" },
    { to: "/bookings", label: "Bookings" },
  ];

  const links = props.role === "admin" ? adminLinks : ownerLinks;

  const sidebarColorClass =
    props.role === "admin" ? "bg-gray-200" : "bg-blue-50";

  return (
    <div
      className={`fixed flex flex-col items-start justify-start w-48 h-screen mx-auto ${sidebarColorClass}`}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className="py-4 mt-6 ml-10 font-semibold text-center"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
