import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/locationSlice";
import { addLocation } from "../../api calls/admin";
function LocationForm() {
  const locationRef = useRef("");
  const dispatch = useDispatch();
 const submit = async (event) => {
    event.preventDefault();
    let newPlace = locationRef.current.value;
    if (newPlace !== "") {
      try {
        const response = await addLocation({ location: newPlace });
        if (response.success) {
          dispatch(setLocation(response.data));
          locationRef.current.value = "";
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error.response);
      }
    }
  };
  return (
    <>
      <div className="w-full p-2 mt-10 border lg:w-1/2">
        <p className="mb-3 text-xl font-semibold text-center">Locations</p>
        <form onSubmit={submit}>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 mb-2 mr-1 border border-gray-400 rounded-lg lg:w-3/4"
              type="text"
              id="location"
              name="location"
              placeholder="Add loaction..."
              ref={locationRef}
            />
            <button className="w-full p-2 text-white bg-gray-700 rounded-lg lg:w-20">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LocationForm;
