import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLocation, getCategory } from "../../api calls/resort";
import { editResort } from "../../api calls/owner";
import { setLocation } from "../../redux/locationSlice";
import { setCategory } from "../../redux/categorySlice";
import { uploadImg } from "../../api calls/owner";
import { useFormik } from "formik";

function EditForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resortData = location.state.resortData;
  const [imageFieldClicked, setImageFieldClicked] = useState(false);
  const locations = useSelector((state) => state.location.location);
  const categories = useSelector((state) => state.category.category);

  const currentUser = useSelector((state) => state.getUser.getOwner);
  const role = currentUser.role;

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.place) {
      errors.place = "Place is required";
    }

    if (!values.category) {
      errors.category = "Category is required";
    }

    if (!values.description) {
      errors.description = "Description is required";
    }

    if (!values.address) {
      errors.address = "Address is required";
    }

    if (!values.amenities) {
      errors.amenities = "Amenities is required";
    }

    if (!values.charge) {
      errors.charge = "Charge per Night is required";
    }

    if (!values.guests) {
      errors.guests = "Number of guests is required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: resortData.name || "",
      place: resortData.location || "",
      category: resortData.category || "",
      description: resortData.description || "",
      address: resortData.address || "",
      amenities: resortData.amenities || "",
      charge: resortData.charge_per_night || "",
      guests: resortData.no_of_guest || "",
      images: [],
    },
    validate,
    onSubmit: async (values) => {
      try {
        let imgUrls = [];

        if (values.images.length > 0) {
          imgUrls = await uploadImg(values.images);
        } else {
          imgUrls = resortData.images;
        }
        let formData = {
          name: values.name,
          place: values.place,
          category: values.category,
          address: values.address,
          description: values.description,
          charge: values.charge,
          guest: values.guests,
          amenities: values.amenities,
          imgUrls,
        };

        const response = await editResort(formData, resortData._id);
        if (response.success) {
          navigate(`/owner/resortInfo/${resortData._id}`);
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
    setImageFieldClicked(true);
  };

  const handleAmenitiesChange = (event) => {
    const enteredValue = event.target.value;
    const enteredAmenities = enteredValue
      .split(",")
      .map((amenity) => amenity.trim());
    formik.setFieldValue("amenities", enteredAmenities);
  };

  const fetchCategory = async () => {
    try {
      const response = await getCategory(role);
      if (response.success) {
        dispatch(setCategory(response.data));
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
    fetchCategory();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen py-12 overflow-hidden">
        <div className="flex flex-col w-full max-w-xl mx-auto mb-2 overflow-hidden bg-white border shadow-lg mt-7 lg:flex-row rounded-xl">
          <div className="w-full px-12 py-10 ">
            <h1 className="mb-2 text-2xl font-bold text-center">
              Edit Resort Info
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
                />
                {formik.touched.name && formik.errors.name && (
                  <span className="text-sm text-red-500">
                    {formik.errors.name}
                  </span>
                )}
              </div>

              <div className="flex">
                <div className="flex-1 mb-4">
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
                  >
                    <option value="">{resortData.location}</option>
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

                <div className="flex-1 mb-4 ml-4">
                  <label
                    className="block mb-2 font-bold text-gray-700"
                    htmlFor="category"
                  >
                    Category:
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                    id="category"
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value=""> {resortData.category}</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category.category}>
                        {category.category}
                      </option>
                    ))}
                  </select>

                  {formik.touched.category && formik.errors.category && (
                    <span className="text-sm text-red-500">
                      {formik.errors.category}
                    </span>
                  )}
                </div>
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
                    htmlFor="guests"
                  >
                    Number of Guests:
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-400 rounded-lg"
                    type="number"
                    id="guests"
                    name="guests"
                    value={formik.values.guests}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.guests && formik.errors.guests && (
                    <span className="text-sm text-red-500">
                      {formik.errors.guests}
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
                {!imageFieldClicked && ( // check if the image field is not clicked
                  <div className="flex my-2">
                    {resortData.images.map((image) => (
                      <img
                        key={image}
                        src={image}
                        alt="Resort Image"
                        className="w-16 h-16 mr-2"
                      />
                    ))}
                  </div>
                )}
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditForm;
