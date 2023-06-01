import React, { useRef } from "react";
import {useDispatch} from 'react-redux'
import { setLocation } from "../../redux/locationSlice";
import { addLocation } from "../../api calls/admin";
function LocationForm() {
  const locationRef = useRef("");
  const dispatch = useDispatch()

  const submit = async (event) => {
    event.preventDefault();
    let newPlace = locationRef.current.value;
    if (newPlace !== "") {
      try {
        const response = await addLocation({ location: newPlace });
        if (response.success) {
          dispatch(setLocation(response.data))
          console.log("response", response.data);
          locationRef.current.value = "";
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="w-1/2 p-4 mt-10 border">
        <p className="mb-3 text-xl font-semibold">Locations</p>
        <form onSubmit={submit}>
          <div className="mb-4">
            <input
              className="w-3/4 px-3 py-2 mr-1 border border-gray-400 rounded-lg"
              type="text"
              id="location"
              name="location"
              ref={locationRef}
            />
            <button className="w-20 p-2 text-white bg-gray-700 rounded-lg">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LocationForm;
