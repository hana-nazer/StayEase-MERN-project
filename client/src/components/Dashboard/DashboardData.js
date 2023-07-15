import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import DashboradInfo from "./DashboradInfo";
import { dashboardDetails } from "../../api calls/admin";
import { useNavigate } from "react-router-dom";

function DashboardData() {
  const navigate = useNavigate();
  const [booking, setBooking] = useState("");
  const [resorts, setResorts] = useState("");
  const [users, setUsers] = useState("");
  const [hosts, setHosts] = useState("");
  const [monthCounts, setMonthCounts] = useState({});

  useEffect(() => {
    info();
  }, []);

  const info = async () => {
    try {
      const response = await dashboardDetails();
      if (response.success) {
        setBooking(response.data.bookings);
        setHosts(response.data.hosts);
        setResorts(response.data.resorts);
        setUsers(response.data.users);
        setMonthCounts(response.data.months);
      }
    } catch (error) {
      if (error.message === "500") {
        navigate("/admin/error500");
      }
    }
  };
  return (
    <>
      <div>
        <div className="flex flex-col h-screen my-10 ">
          <DashboradInfo
            booking={booking}
            users={users}
            hosts={hosts}
            resorts={resorts}
          />
          <div className="py-14">
            <Chart monthCounts={monthCounts} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardData;
