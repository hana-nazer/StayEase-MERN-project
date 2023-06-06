import React from "react";
import { useFormik } from "formik";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { postBooking } from "../../api calls/users";
import { DatePicker } from "antd";

function BookingData() {
  const navigate = useNavigate();
  const resortData = useSelector((state) => state.verifyResort.resortData);

  const resortId = useParams();
  const formik = useFormik({
    initialValues: {
      dates: [],
      guests: "",
      name: "",
      phone: "",
    },
    onSubmit: async (values) => {
      try {
        let bookingData = {
          dates: values.dates,
          guests: values.guests,
          name: values.name,
          phone: values.phone,
          resort: resortId.resortId,
        };
        console.log(bookingData);
        console.log(resortId);
        const response = await postBooking(bookingData, resortId.resortId);
        console.log(response);
      } catch (error) {}
    },
  });

  const handleChange = (selectedDates) => {
    const startDate = moment(selectedDates[0].toDate()).format("DD-MM-YYYY");
    const endDate = moment(selectedDates[1].toDate()).format("DD-MM-YYYY");
    formik.setFieldValue("dates", [startDate, endDate]);
  };

  const onProceed = () => {
    navigate("/bookingdetails");
  };

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
          onBlur={formik.handleBlur}
          style={{ width: "100%" }}
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
          onBlur={formik.handleBlur}
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
          onBlur={formik.handleBlur}
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
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="text-center">
        <button
          onClick={onProceed}
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
