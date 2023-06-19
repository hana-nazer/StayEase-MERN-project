import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../redux/locationSlice";
import { addLocation } from "../../api calls/admin";
import { useFormik } from "formik";

function LocationForm() {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.location.location);

  const formik = useFormik({
    initialValues: {
      location: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.location.trim()) {
        errors.location = "Location is required";
      } else if (
        locations.some(
          (loc) => loc.location.toLowerCase() === values.location.toLowerCase()
        )
      ) {
        errors.location = "Location is already added";
      }
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await addLocation({ location: values.location });
        if (response.success) {
          dispatch(setLocation(response.data));
          resetForm();
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error.response);
      }
    },
  });

  return (
    <>
      <div className="w-full p-4 m-4 mt-10 border lg:w-1/2">
        <p className="mb-3 text-xl font-semibold text-center">Locations</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-2">
            <input
              className="w-full px-3 py-2 mb-2 mr-1 border border-gray-400 rounded-lg lg:w-3/4"
              type="text"
              id="location"
              name="location"
              placeholder="Add location..."
              value={formik.values.location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <button
              className="w-full p-2 text-white bg-gray-700 rounded-lg lg:w-28"
              type="submit"
              disabled={formik.isSubmitting || !!formik.errors.location}
            >
              Add
            </button>
          </div>
          {formik.touched.location && formik.errors.location && (
            <span className="text-sm text-red-500">
              {formik.errors.location}
            </span>
          )}
        </form>
      </div>
    </>
  );
}

export default LocationForm;
