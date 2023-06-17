import React, { useEffect } from "react";
import { GetCurrentAdmin } from "../../api calls/admin";
import { useDispatch, useSelector } from "react-redux";
import { setAdmin } from "../../redux/getUserSlice";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

function ProtectedAdmin({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.getUser.getAdmin);
  const getCurrentAdmin = async () => {
    try {
      const response = await GetCurrentAdmin();
      if (response.success) {
        dispatch(setAdmin(response.data));
      } else {
        console.log("invalid entry");
      }
    } catch (error) {}
  };

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      if (decodedToken.exp < currentTime) {
        navigate("/admin/login");
      } else {
        getCurrentAdmin();
      }
    } else {
      navigate("/admin/login");
    }
  }, []);
  return <>{admin && <>{children}</>}</>;
}

export default ProtectedAdmin;
