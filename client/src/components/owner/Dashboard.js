import React, { useEffect, useState } from "react";
import DashboardInfo from "../owner/DashboardInfo";
import DashboardChart from "../owner/DashboardChart";
import { dashboardInfo } from "../../api calls/owner";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState("");
  const [resorts, setResorts] = useState("");
  const [monthCounts, setMonthCounts] = useState("");
  const info = async () => {
    try {
      const response = await dashboardInfo();
      if (response.success) {
        setBookings(response.data.bookingsCount);
        setResorts(response.data.resortCount);
        setMonthCounts(response.data.months);
      }
    } catch (error) {
      if (error.message === "500") {
        navigate("/owner/error500");
      }
    }
  };

  useEffect(() => {
    info();
  });

  return (
    <>
      <div>
        <div className="flex flex-col h-screen my-10 ">
          <DashboardInfo booking={bookings} resorts={resorts} />
          <div className="py-14">
            <DashboardChart monthCounts={monthCounts} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
