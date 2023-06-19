import React, { useState, useEffect } from "react";
import { resortList } from "../../api calls/admin";
import { useNavigate } from "react-router-dom";
function Resorts() {
  const naviagte = useNavigate();
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
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const onView = (resortId) => {
    naviagte(`/admin/resortInfo/${resortId}`);
  };
  return (
    <>
      {resorts.map((resort) => {
        return (
          <div
            key={resort._id}
            className="grid w-full grid-cols-3 mb-4 border rounded-md shadow-md lg:w-3/4"
          >
            <div className="grid grid-cols-2 col-span-2">
              <div className="flex justify-center p-4">
                <img
                className="h-30 w-30 lg:h-36 lg:w-60"
                  src={resort.images[0]}
                  // style={{ width: "250px", height: "150px" }}
                  alt="not found"
                />
              </div>
              <div className="p-4 mt-5">
                <p className="font-medium lg:font-bold">{resort.name}</p>
                <p className="font-medium lg:font-bold">{resort.location}</p>
              </div>
            </div>
            <div className="flex justify-center p-4 mt-5">
              <button
                className="w-full h-12 font-semibold bg-gray-200 rounded-md shadow lg:w-2/4"
                onClick={() => onView(resort._id)}
              >
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
