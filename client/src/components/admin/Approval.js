import React, { useEffect, useState } from "react";
import { getPendingResorts } from "../../api calls/admin"; // Import the getPendingResorts API function

function Approval() {
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    fetchPendingResorts();
  }, []);

  const fetchPendingResorts = async () => {
    try {
      const response = await getPendingResorts(); // Call the getPendingResorts API function
      if (response.success) {
        setResorts(response.data); // Set the fetched resorts in the state
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
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
                  <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
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
