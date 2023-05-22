import React from "react";

function Details() {
  return (
    <>
      <h2 className="mb-2 text-2xl font-bold">Details</h2>
      <p className="mb-1 font-semibold">
        charge/night:{resortData.charge_per_night}
      </p>
      <p className="mb-1 font-semibold">
        No:of guests:{resortData.no_of_guest}
      </p>
      <p className="mb-1 font-semibold">
        Amenities:{" "}
        {resortData.amenities &&
          resortData.amenities.map((amenity) => amenity).join(", ")}
      </p>
      <p className="font-semibold ">address:{resortData.address} </p>
    </>
  );
}

export default Details;