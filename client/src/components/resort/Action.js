import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { setActionSelected } from "../../redux/resortSlice";

function Action() {
  const dispatch = useDispatch
  const actionSelected = useSelector(
    (state) => state.verifyResort.actionSelected
  );
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

  return (
    <>
      <select
        value={actionSelected}
        onChange={handleActionSelect}
        className="px-4 py-2 text-black bg-gray-200 border border-gray-300 rounded-md"
      >
        <option value="">Action</option>
        <option value="approve">Approve</option>
        <option value="reject">Reject</option>
      </select>
    </>
  );
}

export default Action;
