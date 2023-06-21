import React, { useRef } from "react";
import { uploadImg } from "../api calls/admin";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/categorySlice";
import { addCategory } from "../api calls/admin";

function CategoryForm() {
  const dispatch = useDispatch();
  const categoryRef = useRef("");
  const iconRef = useRef(null);

  const categorySubmit = async (event) => {
    event.preventDefault();
    try {
      const category = categoryRef.current.value;
      const iconFile = iconRef.current.files[0];
      const imageUrl = await uploadImg(iconFile);
      let formData = {
        category: category,
        iconUrl: imageUrl,
      };
      const response = await addCategory(formData);
      if (response.success) {
        dispatch(setCategory(response.data));
        console.log(response.data);
        categoryRef.current.value = ""; // Clear the category input field
        iconRef.current.value = null; // Clear the icon input field
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <>
      <div className="w-3/4 p-4 m-4 mt-10 mb-10 border lg:w-1/2">
        <p className="mb-3 text-xl font-semibold text-center">Add Category</p>
        <form onSubmit={categorySubmit}>
          <div className="mb-4">
            <label htmlFor="category">Category name</label>
            <input
              className="w-full px-3 py-2 mr-1 border border-gray-400 rounded-lg"
              type="text"
              id="category"
              name="category"
              ref={categoryRef}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="icon">CategoryIcon</label>
            <input
              className="w-full px-3 py-2 mr-1 border border-gray-400 rounded-lg"
              type="file"
              id="icon"
              name="icon"
              ref={iconRef}
            />
          </div>
          <button className="w-full p-2 text-white bg-gray-700 rounded-lg">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default CategoryForm;
