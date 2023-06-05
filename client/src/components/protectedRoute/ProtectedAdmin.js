import React ,{useEffect} from "react";
import { GetCurrentAdmin } from "../../api calls/admin";
import { useDispatch, useSelector } from "react-redux";
import { setAdmin } from "../../redux/getUserSlice";

function ProtectedAdmin({children}) {
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
    getCurrentAdmin();
  }, []);
  return (
    <>
      {admin && (
        <>
          {admin.name}
          {children}
        </>
      )}
    </>
  );
}

export default ProtectedAdmin;
