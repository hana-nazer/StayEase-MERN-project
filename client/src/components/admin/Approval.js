import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPendingResorts } from "../../api calls/admin";

function Approval() {
  const [resorts, setResorts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPendingResorts();
  }, []);

  const fetchPendingResorts = async () => {
    try {
      const response = await getPendingResorts();
      if (response.success) {
        setResorts(response.data);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const viewResortDetails = (resortId) => {
    navigate(`/admin/view_resort/${resortId}`);
  };

  return (
    <div className="container mt-10">
      <div>
        <h1 className="mb-4 text-2xl font-semibold">Resort Requests</h1>
        <table className="border">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-400"></th>
              <th className="px-4 py-2 border border-gray-400">Resort Name</th>
              <th className="px-4 py-2 border border-gray-400">Location</th>
              <th className="px-4 py-2 border border-gray-400"></th>
            </tr>
          </thead>
          <tbody>
            {resorts.map((resort) => (
              <tr key={resort._id}>
                <td className="px-4 py-2 border border-gray-400"></td>
                <td className="px-4 py-2 border border-gray-400">
                  {resort.name}
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  {resort.location}
                </td>
                <td className="px-4 py-2 border border-gray-400">
                  <button
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    onClick={() => viewResortDetails(resort._id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Approval;
