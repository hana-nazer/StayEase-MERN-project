import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setBookingData } from "../../redux/BookingSlice";
import { disabledDateList } from "../../api calls/users";
import { DatePicker } from "antd";

function BookingData() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disabledDates, setDisabledDates] = useState([]);
  const resortData = useSelector((state) => state.verifyResort.resortData);
  const formik = useFormik({
    initialValues: {
      dates: [],
      guests: "",
      name: "",
      phone: "",
    },
    onSubmit: async (values) => {
      try {
        const { no_of_days } = values;
        let bookingData = {
          dates: values.dates,
          guests: values.guests,
          name: values.name,
          phone: values.phone,
          no_of_days: no_of_days,
        };
        dispatch(setBookingData(bookingData));
        navigate("/bookingdetails");
      } catch (error) {
        console.log(error);
      }
    },
  });
  const handleChange = (selectedDates) => {
    const numberOfDays = selectedDates[1].diff(selectedDates[0], "days") + 1;
    const startDate = moment(selectedDates[0].toDate()).format("DD-MM-YYYY");
    const dates = [];
    for (let i = 0; i < numberOfDays; i++) {
      const date = moment(startDate, "DD-MM-YYYY").add(i, "days");
      dates.push(date.format("DD-MM-YYYY"));
    }

    formik.setFieldValue("dates", dates);
    formik.setFieldValue("no_of_days", numberOfDays);
  };

  const fetchDisabledDates = async () => {
    try {
      const response = await disabledDateList(resortData._id);
      if (response.success) {
        console.log(response);
        setDisabledDates(response.disabledDates);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.error(error.response);
    }
  };

  const disabledDate = (current) => {
    if (disabledDates && disabledDates.length > 0) {
      return disabledDates.some(
        (date) => current.format("DD-MM-YYYY") === date
      );
    }
    return false;
  };

  useEffect(() => {
    fetchDisabledDates();
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <p className="flex items-center justify-center mb-6 text-2xl font-bold">
        Book your trip
      </p>
      <div className="mb-6" style={{ width: "100%" }}>
        <DatePicker.RangePicker
          onChange={handleChange}
          format="DD-MM-YYYY"
          name="dates"
          style={{ width: "100%" }}
          disabledDate={disabledDate}
        />
      </div>
      <div className="mb-6">
        <input
          className="w-full px-4 py-3 placeholder-gray-500 border rounded-lg"
          type="number"
          placeholder="No:of guests"
          name="guests"
          value={formik.values.guests}
          onChange={formik.handleChange}
          max={resortData.no_of_guest}
        />
      </div>
      <div className="mb-6">
        <input
          className="w-full px-4 py-3 placeholder-gray-500 border rounded-lg"
          type="text"
          placeholder="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </div>
      <div className="mb-6">
        <input
          className="w-full px-4 py-3 placeholder-gray-500 border rounded-lg"
          type="tel"
          placeholder="Phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
      </div>
      <div className="text-center">
        <button
          className="w-full px-8 py-3 text-white rounded-lg bg-cyan-800"
          type="submit"
        >
          Proceed
        </button>
      </div>
    </form>
  );
}
export default BookingData;
