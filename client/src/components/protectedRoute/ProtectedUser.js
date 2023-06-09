import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../api calls/users";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/getUserSlice";

function ProtectedUser({children}) {
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
    getUserData();
  }, []);

  return <>{user && <>{children}</>}</>;
}

export default ProtectedUser;
