import React from "react";
import { useNavigate } from "react-router-dom";

function EditButton({ resortId, resortData }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/owner/edit/${resortId}`, { state: { resortData } });
  };
  return (
    <button
      className="px-4 font-semibold bg-gray-300"
      style={{ height: "40px" }}
      onClick={handleClick}
    >
      Edit Details
    </button>
  );
}

export default EditButton;
