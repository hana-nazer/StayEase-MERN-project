import React, { useState, useEffect } from "react";
import "lato-font";

import { getResorts } from "../../api calls/users";
import { useNavigate } from "react-router-dom";

function ResortCard() {
  const navigate = useNavigate();
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    fetchResorts();
  }, []);

  const fetchResorts = async () => {
    try {
      const response = await getResorts();
      if (response.success) {
        setResorts(response.data);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const onClickResort = (resortId) => {
    navigate(`/resortInfo/${resortId}`);
  };

  return (
    <div className="grid grid-cols-4 gap-5">
      {resorts.map((resort) => (
        <div
          className="w-full col-span-1 overflow-hidden bg-white rounded-md shadow-md cursor-pointer hover:shadow-lg"
          key={resort.id}
          onClick={() => onClickResort(resort._id)}
          style={{ fontFamily: "Lato" }}
        >
          <img
            className="object-cover w-full h-48 rounded-t-md"
            src={resort.images[2]}
            alt="Sunset in the mountains"
          />

          <div className="p-4">
            <h2 className="mb-1 text-xl font-semibold text-gray-800">{resort.name}</h2>
            <p className="mb-1 text-gray-600">{resort.location}</p>
            <p className="text-gray-700">
              Rs {resort.charge_per_night} per night
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResortCard;
