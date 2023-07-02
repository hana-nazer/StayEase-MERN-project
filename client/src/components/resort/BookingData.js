import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setBookingData } from "../../redux/BookingSlice";
import { disabledDateList } from "../../api calls/users";
import { DatePicker } from "antd";
import "../../fonts/fonts.css";

function BookingData() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [disabledDates, setDisabledDates] = useState([]);
  const resortData = useSelector((state) => state.verifyResort.resortData);

  const validateForm = (values) => {
    const errors = {};

    if (!values.dates || values.dates.length === 0) {
      errors.dates = "Choose a date";
    }

    if (!values.guests) {
      errors.guests = "Number of guests is required";
    } else if (values.guests > resortData.no_of_guest) {
      errors.guests = "Number of guests exceeds the maximum limit";
    }

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (values.phone.length !== 10) {
      errors.phone = "Phone number should be 10 digits";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      dates: [],
      guests: "",
      name: "",
      phone: "",
    },
    validate: validateForm,
    onSubmit: async (values) => {
      const errors = validateForm(values);
      formik.setErrors(errors);

      if (Object.keys(errors).length === 0) {
        try {
          const { no_of_days } = values;
          const bookingData = {
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
      <p className="flex items-center justify-center mb-6 text-3xl font-bold tracking-wide text-gray-300 font-oswald">
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
        {formik.touched.dates && formik.errors.dates && (
          <div className="text-red-500">{formik.errors.dates}</div>
        )}
      </div>
      <div className="mb-6">
        <input
          className="w-full px-4 py-3 placeholder-gray-500 border rounded-lg"
          type="number"
          placeholder="No. of guests"
          name="guests"
          value={formik.values.guests}
          onChange={formik.handleChange}
          max={resortData.no_of_guest}
        />
        {formik.touched.guests && formik.errors.guests && (
          <div className="text-red-500">{formik.errors.guests}</div>
        )}
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
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500">{formik.errors.name}</div>
        )}
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
        {formik.touched.phone && formik.errors.phone && (
          <div className="text-red-500">{formik.errors.phone}</div>
        )}
      </div>
      <div className="text-center">
        <button
          className="w-full px-8 py-3 text-white rounded-lg bg-nav-color"
          type="submit"
          disabled={formik.isSubmitting}
        >
          Proceed
        </button>
      </div>
    </form>
  );
}

export default BookingData;
