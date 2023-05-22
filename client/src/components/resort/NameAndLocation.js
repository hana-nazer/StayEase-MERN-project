import React from "react";
import { useSelector } from "react-redux";

function NameAndLocation() {
  const resortData = useSelector((state) => state.verifyResort.resortData);
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">{resortData.name}</h1>
        <p className="text-lg font-bold ">Location: {resortData.location}</p>
      </div>
    </>
  );
}

export default NameAndLocation;
