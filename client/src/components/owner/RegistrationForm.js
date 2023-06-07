import React, { useState, useEffect } from "react";
import { resortData } from "../../api calls/owner";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { uploadImg } from "../../api calls/owner";
import { getLocation } from "../../api calls/resort";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../../redux/locationSlice";

function RegistrationForm() {
  const locations = useSelector((state) => state.location.location);
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.getUser.getOwner);
  const role = currentUser.role;
  const navigate = useNavigate();

  const fetchLocations = async () => {
    try {
      const response = await getLocation(role);
      if (response.success) {
        dispatch(setLocation(response.data));
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      place: "",
      description: "",
      address: "",
      amenities: [],
      charge: "",
      guest: "",
      images: [],
    },
    validate: (values) => {
      const errors = {};
      if (!values.name.trim()) {
        errors.name = "Name of the resort is required";
      }
      if (!values.place.trim()) {
        errors.place = "Place is required";
      }
      if (!values.description.trim()) {
        errors.description = "Description is required";
      }
      if (!values.address.trim()) {
        errors.address = "Address is required";
      }
      if (values.amenities.length === 0) {
        errors.amenities = "At least one amenity is required";
      }
      if (!values.charge.trim()) {
        errors.charge = "Charge per night is required";
      }
      if (values.guest.length === 0) {
        errors.guest = "Number of guests is required";
      }
      if (values.images.length === 0) {
        errors.images = "At least one image is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const imgUrls = await uploadImg(values.images);

        let formData = {
          name: values.name,
          place: values.place,
          address: values.address,
          description: values.description,
          charge: values.charge,
          guest: values.guest,
          amenities: values.amenities,
          imgUrls,
        };
        const response = await resortData(formData);
        if (response.success) {
          navigate("/owner/resortlist");
        } else {
          console.log(response.message);
        }
      } catch (error) {
        console.error(error);
      }
    },
  });
  const handleImageChange = (event) => {
    const imageFiles = Array.from(event.target.files);
    formik.setFieldValue("images", imageFiles);
  };

  const handleAmenitiesChange = (event) => {
    const enteredValue = event.target.value;
    const enteredAmenities = enteredValue
      .split(",")
      .map((amenity) => amenity.trim());
    formik.setFieldValue("amenities", enteredAmenities);
  };

  const handleFieldFocus = (field) => {
    formik.setFieldError(field, "");
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-12 overflow-hidden">
      <div className="flex flex-col w-full max-w-xl mx-auto mb-2 overflow-hidden bg-white border shadow-lg mt-7 lg:flex-row rounded-xl">
        <div className="w-full px-12 py-10 ">
          <h1 className="mb-2 text-2xl font-bold text-center">
            Resort Registration
          </h1>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="name"
              >
                Name of the Resort:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={() => handleFieldFocus("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <span className="text-sm text-red-500">
                  {formik.errors.name}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="place"
              >
                Place:
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                id="place"
                name="place"
                value={formik.values.place}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={() => handleFieldFocus("place")}
              >
                <option value="">Select Place</option>
                {locations.map((location) => (
                  <option key={location._id} value={location.location}>
                    {location.location}
                  </option>
                ))}
              </select>
              {formik.touched.place && formik.errors.place && (
                <span className="text-sm text-red-500">
                  {formik.errors.place}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="description"
              >
                Description:
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                id="description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={() => handleFieldFocus("description")}
              />
              {formik.touched.description && formik.errors.description && (
                <span className="text-sm text-red-500">
                  {formik.errors.description}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="address"
              >
                Address:
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                id="address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onFocus={() => handleFieldFocus("address")}
              />
              {formik.touched.address && formik.errors.address && (
                <span className="text-sm text-red-500">
                  {formik.errors.address}
                </span>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="amenities"
              >
                Amenities:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                type="text"
                id="amenities"
                name="amenities"
                value={formik.values.amenities}
                onChange={handleAmenitiesChange}
                onBlur={formik.handleBlur}
                onFocus={() => handleFieldFocus("amenities")}
              />

              {formik.touched.amenities && formik.errors.amenities && (
                <span className="text-sm text-red-500">
                  {formik.errors.amenities}
                </span>
              )}
            </div>

            <div className="flex">
              <div className="flex-1 mb-4">
                <label
                  className="block mb-2 font-bold text-gray-700"
                  htmlFor="charge"
                >
                  Charge per Night:
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                  type="text"
                  id="charge"
                  name="charge"
                  value={formik.values.charge}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onFocus={() => handleFieldFocus("charge")}
                />
                {formik.touched.charge && formik.errors.charge && (
                  <span className="text-sm text-red-500">
                    {formik.errors.charge}
                  </span>
                )}
              </div>

              <div className="flex-1 mb-4 ml-4">
                <label
                  className="block mb-2 font-bold text-gray-700"
                  htmlFor="guest"
                >
                  Number of Guests:
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                  type="number"
                  id="guest"
                  name="guest"
                  value={formik.values.guest}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onFocus={() => handleFieldFocus("guest")}
                />
                {formik.touched.guest && formik.errors.guest && (
                  <span className="text-sm text-red-500">
                    {formik.errors.guest}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 font-bold text-gray-700"
                htmlFor="images"
              >
                Images:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                type="file"
                id="images"
                name="images"
                multiple
                onChange={handleImageChange}
              />
              {formik.touched.images && formik.errors.images && (
                <span className="text-sm text-red-500">
                  {formik.errors.images}
                </span>
              )}
            </div>

            <div className="flex items-center justify-center mt-6">
              <button
                className="px-4 py-2 font-bold text-white bg-teal-900 rounded hover:bg-teal-700"
                type="submit"
                disabled={formik.isSubmitting}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
