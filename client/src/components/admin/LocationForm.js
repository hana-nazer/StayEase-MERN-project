import React from "react";

function LocationForm() {
    const places = ['trivandrum','calicut','palakkad'];
  return (
    <>
      <div className="w-1/2 p-4 mt-10 border">
        <p className="mb-3 text-xl font-semibold">Locations</p>
        <form>
          <div className="mb-4">
            <input
              className="w-3/4 px-3 py-2 mr-1 border border-gray-400 rounded-lg"
              type="text"
              id="name"
              name="name"
            />
            <button className="w-20 p-2 text-white bg-gray-700 rounded-lg">Add</button>
          </div>
        </form>
        <div>
        <ul>
        {places.map((item, index) => (
          <li key={index} className="font-medium">{index+1}{". "}{item}</li>
        ))}
      </ul>
        </div>
      </div>
    </>
  );
}

export default LocationForm;
