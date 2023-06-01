import React, { useState, useEffect } from "react";
import { getResorts } from "../../api calls/users";

function ResortCard() {
  const [resorts, setResorts] = useState([]);
  useEffect(() => {
    fetchResorts();
  }, []);
  const fetchResorts = async () => {
    try {
      const response = await getResorts();
      if (response.success) {
        setResorts(response.data);
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        {resorts.map((resort) => (
          <div className="w-full col-span-1 overflow-hidden" key={resort.id}>
            <img
              className="w-full rounded-md"
              src={resort.images[4]}
              alt="Sunset in the mountains"
            />

            <div className="py-4">
              <div className="text-xl font-bold ">{resort.name}</div>
              <p className="text-base font-semibold">
                {resort.charge_per_night}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ResortCard;
