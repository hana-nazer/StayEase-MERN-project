import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getResortData } from "../api calls/resort";
import { setOwnerData, setResortData } from "../redux/resortSlice";
import NameAndLocation from "./resort/NameAndLocation";
import Details from "./resort/Details";
import About from "./resort/About";
import OwnerData from "./resort/OwnerData";
import Images from "./resort/Images";
import Action from "./resort/Action";
import BookNow from "./resort/BookNow";
import RoomServices from "./resort/RoomServices";

function ResortDetailedView(props) {
  const tawkMessengerRef = useRef();
  const action = props.action;
  const role = props.role;
  const resortData = useSelector((state) => state.verifyResort.resortData);
  const dispatch = useDispatch();
  const { resortId } = useParams();
  useEffect(() => {
    fetchResortDetails();
  }, []);
  const onLoad = () => {
    console.log("onLoad works!");
  };

  const fetchResortDetails = async () => {
    try {
      const response = await getResortData(resortId, role);
      if (response.success) {
        dispatch(setResortData(response.data));
        dispatch(setOwnerData(response.owner));
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  if (!resortData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mx-20 mb-16 ">
      <div className="grid w-full grid-cols-2 gap-2 mt-20 mb-3">
        <NameAndLocation />
        {!action && (
          <div className="flex items-center justify-end mx-3 ">
            <Action />
          </div>
        )}
      </div>
      <Images />
      {role === "user" && <BookNow resortId={resortId} />}
      <div className="mb-9">
        <About />
      </div>
      
      <div className="flex ">
        <div className="w-1/2 ">
          <RoomServices />
        </div>
        <div className="w-1/2 ">
          <Details />
        </div>
      </div>
      <div>
        <OwnerData />
      </div>
    </div>
  );
}

export default ResortDetailedView;
