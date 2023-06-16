import React from "react";
import '../../fonts/fonts.css'
import { useSelector } from "react-redux";

function RoomServices() {
  const resortData = useSelector((state) => state.verifyResort.resortData);

  return (
    <>
      <p className="mb-4 text-3xl font-semibold tracking-wide text-gray-300 font-oswald">ROOM SERVICES</p>
      <div className="mb-2">
  <ul className="flex flex-wrap justify-between px-8 list-disc ">
    {resortData.amenities &&
      resortData.amenities.map((amenity, index) => (
        <li className="w-1/2 font-medium text-gray-500 font-roboto" key={index}>
          {amenity}
        </li>
      ))}
  </ul>
</div>

      {/* <p className="mb-1 font-semibold">
        {resortData.amenities &&
          resortData.amenities.map((amenity) => amenity).join(", ")}
      </p> */}
    </>
  );
}

export default RoomServices;
