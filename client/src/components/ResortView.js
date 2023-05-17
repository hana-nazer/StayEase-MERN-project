import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPendingResortData } from "../api calls/admin";

function ResortDetailedView() {
  const [resortDetails, setResortDetails] = useState(null);
  const { resortId } = useParams();

  useEffect(() => {
    fetchResortDetails();
  }, []);

  const fetchResortDetails = async () => {
    try {
      const response = await getPendingResortData(resortId);
      if (response.success) {
        setResortDetails(response.data);
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!resortDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{resortDetails.name}</h1>
      <p>Location: {resortDetails.location}</p>
      <p>Description: {resortDetails.description}</p>
      {/* Render other resort details */}
    </div>
  );
}

export default ResortDetailedView;
