import React, { useState, useEffect } from "react";
import { resortList } from "../../api calls/admin";
function Resorts() {
  const [resorts, setResorts] = useState([]);
  useEffect(() => {
    fetchResorts();
  }, []);
  const fetchResorts = async () => {
    try {
      const response = await resortList();
      console.log("response", response);
      if (response.success) {
        setResorts(response.data);
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex justify-end w-3/4 mb-4 mx-28">
      </div>
      {resorts.map((resort) => {
        return (
          <div
            key={resort._id}
            className="grid w-3/4 grid-cols-3 mb-4 border rounded-md shadow-md mx-28"
          >
            <div className="grid grid-cols-2 col-span-2">
              <div className="flex justify-center p-4">
                <img
                  src={resort.images}
                  style={{ width: "250px", height: "150px" }}
                  alt="not found"
                />
              </div>
              <div className="p-4 mt-5">
                <p className="font-bold">{resort.name}</p>
                <p className="font-bold">{resort.location}</p>
                
              </div>
            </div>
            <div className="flex justify-center p-4 mt-5">
              <button className="w-2/4 h-12 font-semibold bg-gray-200 rounded-md shadow">
                View
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Resorts;
