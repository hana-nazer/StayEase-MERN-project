import React, { useState } from "react";
import moment from "moment";

import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

function BookingData() {
  const [dates, setDates] = useState([moment(), moment()]);

  const handleChange = (selectedDates) => {
    setDates(selectedDates);
    console.log(dates[0]);
  };

  return (
    <div className="container  grid grid-cols-2 mx-auto mt-16  h-[80vh] w-3/4  gap-6">
      <div className="flex items-center justify-center col-span-1 mt-4 bg-white border rounded-lg shadow-lg">
        <form>
          <p className="flex items-center justify-center mb-6 text-2xl font-bold ">
            Book your trip
          </p>

          <div className="mb-6">
            <Space direction="vertical" size={12}>
              <RangePicker
                onChange={handleChange}
                format="DD-MM-YYYY"
              />
            </Space>
          </div>

          <div className="mb-6">
            <input
              className="w-full px-4 py-3 placeholder-gray-500 border rounded-lg "
              type="number"
              placeholder="No:of guests"
            />
          </div>

          <div className="mb-6">
            <input
              className="w-full px-4 py-3 placeholder-gray-500 border rounded-lg "
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-6">
            <input
              className="w-full px-4 py-3 placeholder-gray-500 border rounded-lg "
              type="tel"
              placeholder="Phone"
            />
          </div>
          <div className="text-center">
            <button
              className="px-8 py-3 text-white rounded-lg bg-cyan-800"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div
        className="mt-4 bg-white border rounded-lg shadow-lg h-3/5"
        style={{ width: "fit-content" }}
      >
        <div className="flex gap-4 m-4 ">
          <div>
            <img
              src="/images/login.png"
              style={{ width: "150px", height: "100px" }}
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
            <p className="font-semibold">charge/night * no:of days :</p>
            <p className="font-semibold"> No:of guests :</p>
          </div>
        </div>
        <div className="mx-4 mb-4 font-bold">Total :</div>
        <div className="mx-4 text-center">
          <button className="w-full px-8 py-3 text-white rounded-lg bg-cyan-800">
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingData;
