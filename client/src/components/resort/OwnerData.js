import React from "react";
import { useSelector } from "react-redux";

function OwnerData() {
  const ownerData = useSelector((state) => state.verifyResort.ownerData);
  return (
    <>
      <h2 className="text-2xl font-bold">About the Owner</h2>
      <p>Name: {ownerData.name}</p>
      <p>Email: {ownerData.email}</p>
      <p>Phone: {ownerData.phone}</p>
    </>
  );
}

export default OwnerData;
