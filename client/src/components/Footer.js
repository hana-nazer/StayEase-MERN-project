import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="left-0 right-0 h-10 py-3 text-center bg-white border border-gray-200 ">
      <p className="text-center text-gray-500">
        <FontAwesomeIcon icon={faCopyright} /> StayEase
      </p>
    </footer>
  );
}

export default Footer;
