import React from "react";

function ResortListData() {
  return (
    <>
      <div className="p-4 mt-5">
        <p className="font-bold">{resort.name}</p>
        <p className="font-bold">{resort.location}</p>
        <p
          className={`font-semibold ${
            resort.status === "pending" ? "text-red-500" : "text-green-500"
          }`}
        >
          status: {resort.status}
        </p>
      </div>
    </>
  );
}

export default ResortListData;
