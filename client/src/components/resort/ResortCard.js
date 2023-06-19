import React, { useState, useEffect } from "react";
import "lato-font";
import { setResortData } from "../../redux/ResortCardSlice";
import { useSelector, useDispatch } from "react-redux";
import { getResorts } from "../../api calls/users";
import { useNavigate } from "react-router-dom";

function ResortCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resorts = useSelector((state) => state.resort.resorts);
  const searchLocation = useSelector((state) => state.location.searchLocation);
  const selectedCategory = useSelector(
    (state) => state.category.selectedCategory
  );

  useEffect(() => {
    fetchResorts();
  }, [searchLocation]);

  const fetchResorts = async () => {
    try {
      let response;
      if (searchLocation) {
        response = await getResorts(searchLocation);
      } else {
        response = await getResorts();
      }
      if (response.success) {
        dispatch(setResortData(response.data));
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickResort = (resortId) => {
    navigate(`/resortInfo/${resortId}`);
  };

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {resorts.map((resort) => (
        <div
          className="w-full col-span-1 mb-5 overflow-hidden bg-white rounded-md shadow-md cursor-pointer hover:shadow-lg"
          key={resort.id}
          onClick={() => onClickResort(resort._id)}
          style={{ fontFamily: "Lato" }}
        >
          <img
            className="object-cover w-full h-48 "
            src={resort.images[2]}
            alt="Sunset in the mountains"
          />

          <div className="p-4">
            <h2 className="mb-1 text-xl font-semibold text-custom-gray">
              {resort.name}
            </h2>
            <p className="mb-1 text-gray-700">{resort.location}</p>
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
