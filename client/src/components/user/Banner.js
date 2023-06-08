import React from "react";

function Banner() {
  return (
    <>
      <div
        className="relative flex items-center justify-center h-[80vh] bg-cover"
        style={{ backgroundImage: `url('images/cover2.jpg')` }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-20"></div>
        <p className="relative z-10 font-bold text-white text-7xl font-roboto">
          ENJOY YOUR HOLIDAYS
        </p>
      </div>
    </>
  );
}

export default Banner;
