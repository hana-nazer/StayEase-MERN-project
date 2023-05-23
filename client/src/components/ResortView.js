import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPendingResortData } from "../api calls/admin";
import {
  setActionSelected,
  setOwnerData,
  setResortData,
} from "../redux/resortSlice";
import NameAndLocation from "./resort/NameAndLocation";
import Details from "./resort/Details";
import About from "./resort/About";
import OwnerData from "./resort/OwnerData";
import Images from "./resort/Images";

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
      <div className="grid w-full grid-cols-2 gap-2 mt-20 mb-3">
        <NameAndLocation />
        <div className="flex items-center justify-end mx-3 ">
          {/* -----------action------------- */}
          <select
            value={actionSelected}
            onChange={handleActionSelect}
            className="px-4 py-2 text-black bg-gray-200 border border-gray-300 rounded-md"
          >
            <option value="">Action</option>
            <option value="approve">Approve</option>
            <option value="reject">Reject</option>
          </select>
          {/* ------------action------------- */}
        </div>
      </div>
      <Images />
      <div className="grid grid-cols-3 gap-3 mt-9">
        <div className="col-span-2 ">
          <div className="grid grid-rows-2">
            <div className="mb-9">
              <About />
            </div>
            <div>
              <OwnerData />
            </div>
          </div>
        </div>
        <div className="px-10 pt-3 border rounded-lg shadow-xl">
          <Details />
        </div>
      </div>
    </div>
  );
}

export default ResortDetailedView;
