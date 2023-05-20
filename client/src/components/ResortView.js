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
    <div className="w-full border border-gray-700 rounded-md ">
      <div className="p-4">
        <div className="grid w-full grid-cols-2 gap-4 ">
          <div>
            <div className="flex flex-col items-center">
              <h1 className="text-2xl font-bold text-center">
                {resortData.name}
              </h1>
              <p className="text-lg font-bold text-center">
                Location: {resortData.location}
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center">
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
        </div>

        <div className="flex flex-col items-center ">
          <div
            className="grid grid-cols-3 border rounded-md"
            style={{ width: "900px", height: "400px" }}
          >
            <div className="col-span-1">
              <div className="grid grid-rows-2">
                <div
                  className="bg-blue-500 p-"
                  style={{ width: "300px", height: "200px" }}
                >
                  <h2>Subrow 1 - Column 1</h2>
                </div>
                <div
                  className="bg-red-500 p-"
                  style={{ width: "300px", height: "200px" }}
                >
                  <h2>Subrow 2 - Column 1</h2>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="grid grid-rows-2">
                <div
                  className="bg-green-500 "
                  style={{ width: "300px", height: "200px" }}
                >
                  <h2>Subrow 1 - Column 2</h2>
                </div>
                <div
                  className="bg-yellow-500 "
                  style={{ width: "300px", height: "200px" }}
                >
                  <h2>Subrow 2 - Column 2</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col col-span-1">
              <div
                className="flex-grow bg-purple-500"
                style={{ width: "300px", height: "200px" }}
              >
                <h2>Column 3</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="p-4 ">
            <h2>Description</h2>
            <p>{resortData.description}</p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="p-4 ">
            <h2>Owner Details</h2>
            <p>Name: {ownerData.name}</p>
            <p>Email: {ownerData.email}</p>
            <p>Phone: {ownerData.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResortDetailedView;
