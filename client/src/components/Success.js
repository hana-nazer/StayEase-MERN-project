import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="border cotainer">
        <h2 className="text-center">Successfully booked</h2>
        <h4 className="text-center">Enjoy your holidays.</h4>
        <p className="text-center">
          Your resort booking has been successfully confirmed. We look forward
          to hosting you!
        </p>
        <div>
          <Link to="/" className="text-blue-500 underline ">
            <p className="text-center">Back to Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Success;
