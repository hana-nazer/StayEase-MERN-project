import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPendingResortData } from "../api calls/admin";
import {
  setActionSelected,
  setOwnerData,
  setResortData,
} from "../redux/resortSlice";

function ResortDetailedView() {
  const actionSelected = useSelector(
    (state) => state.verifyResort.actionSelected
  );
  const resortData = useSelector((state) => state.verifyResort.resortData);
  const ownerData = useSelector((state) => state.verifyResort.ownerData);
  const dispatch = useDispatch();
  const { resortId } = useParams();

  useEffect(() => {
    fetchResortDetails();
  }, []);

  const fetchResortDetails = async () => {
    try {
      const response = await getPendingResortData(resortId);
      if (response.success) {
        dispatch(setResortData(response.data));
        dispatch(setOwnerData(response.owner));
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleActionSelect = (event) => {
    dispatch(setActionSelected(event.target.value));
    // setSelectedAction(event.target.value);
    performAction(event.target.value);
  };

  const performAction = async (action) => {
    if (action === "approve") {
      try {
        // Perform the API call to approve the resort
        // Update the approval status in the backend
        // Update the approval status in the frontend
        console.log("Resort approved");
      } catch (error) {
        console.log(error);
      }
    } else if (action === "reject") {
      try {
        // Perform the API call to reject the resort
        // Update the approval status in the backend
        // Update the approval status in the frontend
        console.log("Resort rejected");
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (!resortData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-20 mb-16 rounded-md">
      {/* heading and action */}
      <div className="grid w-full grid-cols-2 gap-2 mt-20 mb-3">
        <div>
          <h1 className="text-2xl font-bold">{resortData.name}</h1>
          <p className="text-lg font-bold ">Location: {resortData.location}</p>
        </div>
        <div className="flex items-center justify-end mx-3 ">
          <select
            value={actionSelected}
            onChange={handleActionSelect}
            className="px-4 py-2 text-black bg-gray-200 border border-gray-300 rounded-md"
          >
            <option value="">Action</option>
            <option value="approve">Approve</option>
            <option value="reject">Reject</option>
          </select>
        </div>
      </div>

      {/*--------------------------------------------------------------------------  */}

      <div className="grid grid-cols-4 gap-1 h-80">
        <div className="col-span-1">
          <div className="mb-1 bg-red-500 h-1/2">Row 1</div>
          <div className="bg-green-500 h-1/2">Row 2</div>
        </div>

        <div className="col-span-1">
          <div className="mb-1 bg-yellow-500 h-1/2">Row 1</div>
          <div className="bg-blue-500 h-1/2">Row 2</div>
        </div>
        <div className="h-full col-span-2 bg-green-500">Column 3</div>
      </div>

      {/* ------------------------------------------------------------------------ */}
      <div className="grid grid-cols-3 gap-3 mt-9">
        <div className="col-span-2 ">
          <div className="grid grid-rows-2">
            <div className="mb-9">
              <h2 className="mb-2 text-2xl font-bold">About this Place</h2>
              <p>{resortData.description}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">About the Owner</h2>
              <p>Name: {ownerData.name}</p>
              <p>Email: {ownerData.email}</p>
              <p>Phone: {ownerData.phone}</p>
            </div>
          </div>
        </div>
        <div className="px-10 pt-3 border rounded-lg shadow-xl h-3/4">
          <h2 className="mb-2 text-2xl font-bold">Details</h2>
          <p className="mb-1 font-semibold">charge/night:7000</p>
          <p className="mb-1 font-semibold">No:of guests:5</p>
          <p className="mb-1 font-semibold">amneties:wifi,pool</p>
          <p className="font-semibold">address:kalathummarath </p>
        </div>
      </div>

      {/* -------------------------------------------------------------------------- */}
    </div>
  );
}

export default ResortDetailedView;
