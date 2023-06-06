import React, { useEffect } from "react";
import { GetCurrentOwner } from "../../api calls/owner";
import { useDispatch, useSelector } from "react-redux";
import { setOwner } from "../../redux/getUserSlice";

function Protected({ children }) {
  const dispatch = useDispatch();
  const owner = useSelector((state) => state.getUser.getOwner);

  const getCurrentOwner = async () => {
    try {
      const response = await GetCurrentOwner();
      if (response.success) {
        dispatch(setOwner(response.data));
      } else {
        console.log("invalid entry");
      }
    } catch (error) {}
  };

  useEffect(() => {
    getCurrentOwner();
  }, []);

  return (
    <>
      {owner && (
        <>
          {children}
        </>
      )}
    </>
  );
}

export default Protected;
