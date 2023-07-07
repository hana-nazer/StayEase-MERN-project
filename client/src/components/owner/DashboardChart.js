import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const DashboardChart = ({ monthCounts }) => {
  
  const datas = [
    {
      name: "Jan",
      bookingCount: monthCounts?.January || 0,
    },
    {
      name: "Feb",
      bookingCount: monthCounts?.February || 0,
    },
    {
      name: "March",
      bookingCount: monthCounts?.March || 0,
    },
    {
      name: "April",
      bookingCount: monthCounts?.April || 0,
    },
    { name: "May", bookingCount: monthCounts?.May || 0 },
    { name: "June", bookingCount: monthCounts?.June || 0 },
    { name: "July", bookingCount: monthCounts?.July || 0 },
    {
      name: "Aug",
      bookingCount: monthCounts?.August || 0,
    },
    {
      name: "Sept",
      bookingCount: monthCounts?.September || 0,
    },
    {
      name: "Oct",
      bookingCount: monthCounts?.October || 0,
    },
    {
      name: "Nov",
      bookingCount: monthCounts?.November || 0,
    },
    {
      name: "Dec",
      bookingCount: monthCounts?.December || 0,
    },
  ];

  return (
    <BarChart width={1000} height={300} data={datas}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="bookingCount" fill="#8884d8" barSize={30} />
    </BarChart>
  );
};

export default DashboardChart;
