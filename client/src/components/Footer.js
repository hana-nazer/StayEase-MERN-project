import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-center h-10 py-3 text-center bg-white border border-gray-200">
      <p className="mx-2 text-center">
        Register as host{" "}
        <Link className="text-blue-700 underline" to="/owner/signup">
          register
        </Link>
      </p>
      <p className="mx-2 text-gray-500">
        <FontAwesomeIcon icon={faCopyright} /> StayEase
      </p>
    </footer>
  );
}

export default Footer;
