import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import UserChatButton from "./user/UserChatButton";
import EditButton from "./owner/EditButton";

function ResortDetailedView(props) {
  const navigate = useNavigate();
  const action = props.action;
  const role = props.role;

  const resortData = useSelector((state) => state.verifyResort.resortData);

  const dispatch = useDispatch();
  const { resortId } = useParams();
  useEffect(() => {
    fetchResortDetails();
  }, []);

  const fetchResortDetails = async () => {
    try {
      const response = await getResortData(resortId, role);
      if (response.success) {
        dispatch(setResortData(response.data));
        dispatch(setOwnerData(response.owner));
      }
    } catch (error) {
      if (error.message === "500") {
        if (role === "user") {
          navigate("/error500");
        }
        if (role === "owner") {
          navigate("/owner/error500");
        }
        if (role === "admin") {
          navigate("/admin/error500");
        }
      }
    }
  };
  if (!resortData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mx-20 mb-16 ">
      <div className="flex justify-between w-full gap-2 mt-20 mb-3">
        <NameAndLocation />

        {!action && (
          <div className="flex items-center justify-end mx-3 ">
            <Action />
          </div>
        )}
        {role === "user" ? (
          <UserChatButton />
        ) : role === "owner" ? (
          <EditButton resortId={resortId} resortData={resortData} />
        ) : null}
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
