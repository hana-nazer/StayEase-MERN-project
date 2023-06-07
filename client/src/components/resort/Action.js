import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setActionSelected, setResortData } from "../../redux/resortSlice";
import { resortStatus } from "../../api calls/admin";

function Action() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resortData = useSelector((state) => state.verifyResort.resortData);
  const actionSelected = useSelector(
    (state) => state.verifyResort.actionSelected
  );
  const handleActionSelect = (event) => {
    dispatch(setActionSelected(event.target.value));
    performAction(event.target.value);
  };

  const performAction = async (action) => {
    if (action === "Approve") {
      try {
        const response = await resortStatus(resortData._id, action);
        if (response.success) {
          dispatch(setResortData(response));
          navigate("/admin/resorts");
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error.response);
      }
    } else if (action === "Reject") {
      try {
        const response = await resortStatus(resortData._id, action);
        if (response.success) {
          dispatch(setResortData(response));
          navigate("/admin/resorts");
        }
      } catch (error) {
        console.log(error.response);
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
        <option value="Approve">Approve</option>
        <option value="Reject">Reject</option>
      </select>
    </>
  );
}

export default Action;
