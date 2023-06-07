import React, { useState, useEffect } from "react";
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
    <>
      <div className="grid grid-cols-4 gap-5">
        {resorts.map((resort) => (
          <div
            className="w-full col-span-1 overflow-hidden cursor-pointer"
            key={resort.id}
            onClick={() => {
              onClickResort(resort._id);
            }}
          >
            <img
              className="w-full rounded-md"
              src={resort.images[2]}
              alt="Sunset in the mountains"
              style={{ width: "300px", height: "250px" }}
            />

            <div className="py-4">
              <div className="text-xl font-semibold ">
                {resort.name}
                {" ,"}
                {resort.location}
              </div>
              <p className="text-base font-semibold">
                Rs {resort.charge_per_night} night
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ResortCard;
