import React, { useEffect, useState } from "react";
import DashboardInfo from '../owner/DashboardInfo'
import DashboardChart from "../owner/DashboardChart";

function Dashboard() {
  return (
    <>
      <div>
        <div className="flex flex-col h-screen my-10 ">
          <DashboardInfo/>
          <div className="py-14">
          <DashboardChart/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
