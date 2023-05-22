import React from "react";

function Resorts() {
  const randomImageURL = "https://source.unsplash.com/random";
  return (
    <>
      <div className="flex justify-end w-3/4 mb-4 mx-28">
        <button className="w-1/5 h-12 font-semibold bg-gray-200 rounded-md shadow ">
          Add resort
        </button>
      </div>
      <div className="grid w-3/4 grid-cols-3 mb-4 border rounded-md shadow-md mx-28">
        <div className="grid grid-cols-2 col-span-2 ">
          <div className="flex justify-center p-4 ">
            <img
              src={randomImageURL}
              style={{ width: "300px", height: "200px" }}
              alt="not found"
            />
          </div>
          <div className="p-4 mt-5">
            <p className="font-bold">Name</p>
            <p className="font-bold">Location</p>
          </div>
        </div>

        <div className="flex justify-center p-4 mt-5">
          <button className="w-2/4 h-12 font-semibold bg-gray-200 rounded-md shadow">
            View
          </button>
        </div>
      </div>
    </>
  );
}

export default Resorts;
