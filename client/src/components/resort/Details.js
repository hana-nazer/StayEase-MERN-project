import React from "react";
import '../../fonts/fonts.css'

import { useSelector } from "react-redux";

function Details() {
  const resortData = useSelector((state)=>state.verifyResort.resortData)
  return (
    <>
      <h2 className="mb-2 text-3xl font-semibold font-bold tracking-wide text-gray-300 font-oswald">ROOM DETAILS</h2>
      <p className="mb-1 text-gray-500 font-roboto">
        Charge/night:{resortData.charge_per_night}
      </p>
      <p className="mb-1 text-gray-500 font-roboto">
        No:of guests:{resortData.no_of_guest}
      </p>
      <p className="mb-1 text-gray-500 font-roboto">
       Category:{resortData.category}
      </p>
      
      <p className="text-gray-500 font-roboto ">Address:{resortData.address} </p>
    </>
  );
}

export default Details;
