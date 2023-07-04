import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Chart = () => {
  const datas = [
    { name: "Jan", bookingCount: 0, pv: 2400, amt: 2400 },
    { name: "Feb", bookingCount: 0, pv: 2400, amt: 2400 },
    { name: "March", bookingCount: 0, pv: 2400, amt: 2400 },
    { name: "April", bookingCount: 5, pv: 2400, amt: 2400 },
    { name: "May", bookingCount: 0, pv: 2400, amt: 2400 },
    { name: "June", bookingCount: 0, pv: 2400, amt: 2400 },
    { name: "July", bookingCount: 9, pv: 2400, amt: 2400 },
    { name: "Aug", bookingCount: 0, pv: 2400, amt: 2400 },
    { name: "Sept", bookingCount: 0, pv: 2400, amt: 2400 },
    { name: "Oct", bookingCount: 0, pv: 2400, amt: 2400 },
    { name: "Nov", bookingCount: 0, pv: 2400, amt: 2400 },
    { name: "Dec", bookingCount: 0, pv: 2400, amt: 2400 },
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

export default Chart;
