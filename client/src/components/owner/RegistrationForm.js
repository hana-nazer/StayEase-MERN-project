import React, { useState } from "react";
import { resortData } from "../../api calls/owner";
import { useNavigate } from "react-router-dom";
import { uploadImg } from "../../api calls/owner";

function RegistrationForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [touched, setTouched] = useState({
    name: false,
    place: false,
    description: false,
    images: false,
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    setErrors(errors);
    setTouched({
      name: true,
      place: true,
      description: true,
      images: true,
      email: true,
    });
    if (Object.keys(errors).length === 0) {
      // Check if there are no errors
      try {
        const imgUrl = await uploadImg(images[0]);
        let formData = {
          name,
          place,
          description,
          imgUrl,
        };
        const response = await resortData(formData);
        if (response.success) {
          console.log(response.message);
          navigate("/owner/resort_home");
        } else {
          console.log(response.message);
        }
      } catch (error) {}
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name of the resort is required";
    }
    if (!place.trim()) {
      errors.place = "Place is required";
    }
    if (!description.trim()) {
      errors.description = "Description is required";
    }
    if (images.length === 0) {
      errors.images = "At least one image is required";
    }

    return errors;
  };

  const handleImageChange = (event) => {
    const imageFiles = Array.from(event.target.files);
    setImages(imageFiles);
  };

  const handleBlur = (event) => {
    const fieldName = event.target.name;
    setTouched((prevTouched) => ({ ...prevTouched, [fieldName]: true }));
  };

  const handleFocus = (event) => {
    const fieldName = event.target.name;
    setTouched((prevTouched) => ({ ...prevTouched, [fieldName]: true }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-12 overflow-hidden">
      <div className="flex flex-col w-full max-w-lg mx-auto mt-2 mb-2 overflow-hidden bg-white border shadow-lg lg:flex-row rounded-xl">
        <div className="w-full px-12 py-10">
          <h1 className="mb-2 text-2xl font-bold text-center">
            Resort Registration
          </h1>

          <form onSubmit={handleSubmit}>
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
                value={name}
                onChange={(event) => setName(event.target.value)}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              {touched.name && errors.name && (
                <span className="text-sm text-red-500">{errors.name}</span>
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
                value={place}
                onChange={(event) => setPlace(event.target.value)}
                onBlur={handleBlur}
                onFocus={handleFocus}
              >
                <option value="">Select a place</option>
                <option value="wayanad">Wayanad</option>
                <option value="munnar">Munnar</option>
                <option value="cochin">Cochin</option>
              </select>
              {touched.place && errors.place && (
                <span className="text-sm text-red-500">{errors.place}</span>
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
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                onBlur={handleBlur}
                onFocus={handleFocus}
              ></textarea>
              {touched.description && errors.description && (
                <span className="text-sm text-red-500">
                  {errors.description}
                </span>
              )}
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
                accept="image/*"
                multiple
                onChange={handleImageChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
              {touched.images && errors.images && (
                <span className="text-sm text-red-500">{errors.images}</span>
              )}
            </div>

            <button
              className="w-full py-3 mt-5 text-center text-white bg-teal-900 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
