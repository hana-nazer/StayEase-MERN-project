import React from "react";
import "../../fonts/fonts.css";
import { useSelector } from "react-redux";

function NameAndLocation() {
  const resortData = useSelector((state) => state.verifyResort.resortData);
  return (
    <div>
      <h1 className="text-3xl font-semibold leading-10 tracking-wide text-gray-400 font-oswald">
        {resortData.name}
      </h1>
      <p className="text-lg text-gray-400 font-oswald">
        Location: {resortData.location}
      </p>
    </div>
  );
}

export default NameAndLocation;
