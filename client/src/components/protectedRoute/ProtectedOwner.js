import React, { useEffect } from "react";
import { GetCurrentOwner } from "../../api calls/owner";
import { useDispatch, useSelector } from "react-redux";
import { setOwner } from "../../redux/getUserSlice";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

function Protected({ children }) {
  const navigate = useNavigate();
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
    const token = localStorage.getItem("owner_token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      if (decodedToken.exp < currentTime) {
        navigate("/owner/login");
      } else {
        getCurrentOwner();
      }
    } else {
      navigate("/owner/login");
    }
  }, []);

  return <>{owner && <>{children}</>}</>;
}

export default Protected;
