import React from "react";
import "../../fonts/fonts.css";

import { useSelector } from "react-redux";

function OwnerData() {
  const ownerData = useSelector((state) => state.verifyResort.ownerData);
  return (
    <>
      <h2 className="text-3xl font-semibold tracking-wide text-gray-300 font-oswald">
        CONNECT WITH THE HOST
      </h2>
      <p className="font-medium text-gray-500 font-roboto">
        Name: {ownerData.name}
      </p>
      <p className="font-medium text-gray-500 font-roboto">
        Email: {ownerData.email}
      </p>
      <p className="font-medium text-gray-500 font-roboto">
        Phone: {ownerData.phone}
      </p>
    </>
  );
}

export default OwnerData;
