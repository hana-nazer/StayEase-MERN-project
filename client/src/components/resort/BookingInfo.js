import React from "react";

function BookingInfo() {
  return (
    <>
      <div
        className="mt-4 bg-white border rounded-lg shadow-lg h-3/5"
        style={{ width: "fit-content" }}
      >
        <div className="flex gap-4 m-4">
          <div>
            <img
              src="/images/login.png"
              style={{ width: "150px", height: "100px" }}
              alt="logo"
            />
          </div>
          <div>
            <p>name:novera</p>
            <p>location:munar</p>
          </div>
        </div>
        <div className="mx-4">
          <p className="mb-3 font-bold underline">Price details</p>
          <div>
            <p className="font-semibold">charge/night * no:of days:</p>
            <p className="font-semibold">No:of guests:</p>
          </div>
        </div>
        <div className="mx-4 mb-4 font-bold">Total:</div>
        <div className="mx-4 text-center">
          <button className="w-full px-8 py-3 text-white rounded-lg bg-cyan-800">
            Pay now
          </button>
        </div>
      </div>
    </>
  );
}

export default BookingInfo;
