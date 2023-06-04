import React, { useEffect, useState } from "react";
import { GetCurrentOwner } from "../../api calls/owner";

function Protected({ children }) {
  const [owner, setOwner] = useState(null);
  const getCurrentOwner = async () => {
    try {
      const response = await GetCurrentOwner();
      if (response.success) {
        setOwner(response.data);
      }
    } catch (error) {
      setOwner(null);
    }
  };

  useEffect(() => {
    getCurrentOwner();
  }, []);

  return (
    <>
      {owner && (
        <>
          {owner.name}
          {children}
        </>
      )}
      {!owner&&<p>no owner</p>}
    </>
  );
}

export default Protected;
