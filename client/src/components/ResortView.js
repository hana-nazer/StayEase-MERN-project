import React, { useEffect } from "react";
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
import Navbar from "./Navbar";
import BookNow from "./resort/BookNow";

function ResortDetailedView(props) {
  const action = props.action;
  const role = props.role;
  console.log(role);
  const resortData = useSelector((state) => state.verifyResort.resortData);
  const dispatch = useDispatch();
  const { resortId } = useParams();
  useEffect(() => {
    fetchResortDetails();
  }, []);
  const fetchResortDetails = async () => {
    try {
        const response = await getResortData(resortId,role);
      if (response.success) {
        dispatch(setResortData(response.data));
        dispatch(setOwnerData(response.owner));
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (!resortData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mx-20 mb-16 rounded-md">
      <Navbar />
      <div className="grid w-full grid-cols-2 gap-2 mt-20 mb-3">
        <NameAndLocation />
        {!action && (
          <div className="flex items-center justify-end mx-3 ">
            <Action />
          </div>
        )}
      </div>
      <Images />
      {role === "user" && <BookNow />}

      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 ">
          <div className="grid grid-rows-2">
            <div className="mb-9">
              <About />
            </div>
            <div>
              <OwnerData />
            </div>
          </div>
        </div>
        <div className="px-10 pt-3 border rounded-lg shadow-xl">
          <Details />
        </div>
      </div>
    </div>
  );
}

export default ResortDetailedView;
