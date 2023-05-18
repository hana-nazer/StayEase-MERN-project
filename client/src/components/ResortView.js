import React, { useEffect, useState } from "react";
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

  // const [resortDetails, setResortDetails] = useState(null);
  // const [ownerData, setOwnerData] = useState(null);
  // const [selectedAction, setSelectedAction] = useState(null);

  useEffect(() => {
    fetchResortDetails();
  }, []);

  const fetchResortDetails = async () => {
    try {
      const response = await getPendingResortData(resortId);
      if (response.success) {
        dispatch(setResortData(response.data));
        dispatch(setOwnerData(response.owner));
        // setResortDetails(response.data);
        // setOwnerData(response.owner);
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
    <div className="container auto py-">
      <div className="flex flex-col ">
        <div className="p-4 text-white bg-orange-800">
          <h1>{resortData.name}</h1>
          <p>Location: {resortData.location}</p>
          <div>
            <select
              value={actionSelected}
              onChange={handleActionSelect}
              className="text-black"
            >
              <option value=""> Action</option>
              <option value="approve">Approve</option>
              <option value="reject">Reject</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="p-4 text-white bg-amber-800 ">
          <h2>Images</h2>
          {/* Add image components here */}
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="p-4 text-white bg-zinc-600 ">
          <h2>Description</h2>
          <p>{resortData.description}</p>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="p-4 text-white bg-red-800">
          <h2>Owner Details</h2>
          <p>Name: {ownerData.name}</p>
          <p>Email: {ownerData.email}</p>
          <p>Phone: {ownerData.phone}</p>
        </div>
      </div>
      {/* Render other resort details */}
    </div>
  );
}

export default ResortDetailedView;
