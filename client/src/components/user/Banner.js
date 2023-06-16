import React from "react";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";

function Banner() {
  const user = useSelector((state) => state.getUser.getUser);
  const role = user ? user.role : null;
  const name = user ? user.name : null;
  return (
    <>
      <div className="relative  h-[40vh] lg:h-[80vh] xl:h-[80vh] ">
        <div className="relative z-10 ">
          <Navbar search="true" role={role} name={name} position="true" />
        </div>
        <img
          src="images/cover2.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt="Background Image"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-20">
          <p className="relative z-10 font-bold text-center text-white text-7xl font-roboto">
            ENJOY YOUR HOLIDAYS
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
