import React from "react";

function Action() {
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
