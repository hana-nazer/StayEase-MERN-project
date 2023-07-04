import React from "react";

function DashboradInfo(props) {
  return (
    <>
      <div className="flex w-full justify-evenly ">
        <div className="flex flex-col items-center p-3 border rounded-lg">
          <h1>Number of Resorts</h1>
          <p>{props.resorts}</p>
        </div>
        <div className="flex flex-col items-center p-3 border rounded-lg">
          <h1>Number of Hosts</h1>
          <p>{props.hosts} </p>
        </div>
        <div className="flex flex-col items-center p-3 border rounded-lg">
          <h1>Number of Bookings</h1>
          <p>{props.booking}</p>
        </div>
        <div className="flex flex-col items-center p-3 border rounded-lg">
          <h1>Number of Users</h1>
          <p>{props.users}</p>
        </div>
      </div>
    </>
  );
}

export default DashboradInfo;
