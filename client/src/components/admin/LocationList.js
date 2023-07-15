import React, { useEffect } from "react";
import { getLocation } from "../../api calls/resort";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../../redux/locationSlice";
import { useNavigate } from "react-router-dom";

function LocationList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentAdmin = useSelector((state) => state.getUser.getAdmin);
  const locations = useSelector((state) => state.location.location);
  const role = currentAdmin.role;
  const fetchLocations = async () => {
    try {
      const response = await getLocation(role);
      if (response.success) {
        dispatch(setLocation(response.data));
      }
    } catch (error) {
      if (error.message === "500") {
        navigate("/admin/error500");
      }
    }
  };

  useEffect(() => {
    fetchLocations();
  }, [locations]);

  return (
    <div className="w-full p-4 m-4 mt-10 mb-10 border lg:w-1/2">
      <ul>
        {locations
          .slice()
          .reverse()
          .map((location) => (
            <li className="py-2 border-b border-gray-300" key={location._id}>
              {location.location}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default LocationList;
