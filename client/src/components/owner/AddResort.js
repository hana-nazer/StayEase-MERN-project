import React from "react";
import { useNavigate } from "react-router-dom";

function AddResort() {
  const navigate = useNavigate();
  const addResort = () => {
    navigate("/owner/register");
  };
  return (
    <button
      className="w-1/5 h-12 mb-4 font-semibold bg-gray-200 rounded-md shadow"
      onClick={addResort}
    >
      Add resort
    </button>
  );
}

export default AddResort;
