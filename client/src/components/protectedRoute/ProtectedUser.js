import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../api calls/users";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/getUserSlice";
import jwtDecode from "jwt-decode";

function ProtectedUser({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.getUser.getUser);

  const getUserData = async () => {
    try {
      const response = await getCurrentUser();
      if (response.success) {
        dispatch(setUser(response.data));
      } else {
        navigate("/login");
      }
    } catch (error) {}
  };

  useEffect(() => {
    const token = localStorage.getItem("user_token");
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      if (decodedToken.exp < currentTime) {
        navigate("/login");
      } else {
        getUserData();
      }
    } else {
      navigate("/login");
    }
  }, []);

  return <>{user && <>{children}</>}</>;
}

export default ProtectedUser;
